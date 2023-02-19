import styles from '../styles/homeStyles/Work.module.css'
import {Canvas, extend, useFrame, useLoader} from "@react-three/fiber"
import { Color, Texture, TextureLoader, Vector3} from 'three';
import * as THREE from 'three'
import { Html, shaderMaterial } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import slideVertex from "raw-loader!glslify-loader!../shaders/slideVertex.vert"
import slideFragment from "raw-loader!glslify-loader!../shaders/slideFragment.frag"
import { workSlideShow } from '../data';
import {useRouter} from 'next/router'

const SlideShaderMaterial = shaderMaterial(
    { uTime: 0, uHover: 0, uColor: new Color(1, 0.2, 1), uTexture: new Texture(), uMouse: new Vector3(), uPosition: new Vector3(), uProgress: 0, uMeshScale: new THREE.Vector2(1,1), uMeshPosition: new THREE.Vector2(0, 0), uViewSize: new THREE.Vector2(1, 1) },
    slideVertex,
    slideFragment
)

extend({SlideShaderMaterial})

const Picture = ({cover, index, state}) => {
    const ref = useRef()
    const meshRef = useRef()
    const ref2 = useRef()
    const [hovered, setHovered] = useState(false)
    const router = useRouter()

    // const getViewSize = () => {
    //     const fovInRadians = (camera.fov * Math.PI) / 180;
    //     const height = Math.abs(
    //         camera.position.z * Math.tan(fovInRadians / 2) * 2
    //     );

    //     return { width: height * camera.aspect, height}
    // }

    // useEffect(() => {
    //     const viewSize = getViewSize()
    //     ref.current.uViewSize.x = viewSize.width;
    //     ref.current.uViewSize.y = viewSize.height;
    // }, [])

    const onImageClick = () => {
        
        ref.current.uMeshPosition.x = x / widthViewUnit;
        ref.current.uMeshPosition.y = y / heightViewUnit;

        ref.current.uMeshScale.x = widthViewUnit;
        ref.current.uMeshScale.y = heightViewUnit
    }
    
    const onHover = (value) => {
        ref.current.uHover = value
        setHovered(!hovered)
    }

    const navigate = () => {
        router.push('/works/work')
        setHovered(false)
    }

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])
    const mouse = (e) => {
        ref.current.uMouse = e.point
    }
    useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()))
    useFrame(() => (
        meshRef.current.position.x = (1.5 * index + 1) + state.x, 
        ref.current.uPosition = meshRef.current.position
        

    ))
   const [image] = useLoader(TextureLoader, [cover])
    return (
        <>
            <mesh onClick={() => navigate()} onPointerEnter={()=> onHover(1)} onPointerLeave={() => onHover(0)} onPointerMove={(e) => mouse(e)} ref={meshRef}>
                <planeBufferGeometry ref={ref2} args={[1, 0.7, 16, 16]} />
                <slideShaderMaterial  ref={ref} uTexture={image}/>
                {/* <Html style={{backgroundColor: 'red', pointerEvents: 'none'}}>
                    <div >
                        <h1>TEST</h1>
                        <h1>Test</h1>
                    </div>
                </Html> */}
            </mesh>
        </>
    )
}


const Work = ({state}) => {
    return (
        <section id="work" className={styles.work}>
            <div className={styles.workContainer}>
                <div>
                    <h1>WORK</h1>
                </div>
            </div>

            <Canvas style={{position: 'absolute', left: 0, top: 0, zIndex: 2}} camera={{fov: 8, position: [0, 0, 10]}} >
                
                <Suspense fallback={null}>
                    {workSlideShow.map((slide, index) => (
                        <Picture state={state} key={slide.id} index={index} {...slide} />
                    ))}
                </Suspense>
            </Canvas>

            <div className={styles.absoluteCircle1}></div>
            <div className={styles.absoluteCircle2}></div>
        </section>
    );
}

export default Work;