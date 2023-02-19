import styles from '../styles/homeStyles/Me.module.css'
import { Suspense, useEffect, useRef } from 'react';
import {Canvas, extend, useFrame, useLoader} from "@react-three/fiber"
import { Color, Texture, TextureLoader, Vector2 } from 'three';
import fragment from "raw-loader!glslify-loader!../shaders/fragment.frag"
import vertex from "raw-loader!glslify-loader!../shaders/vertex.vert"
import { shaderMaterial } from '@react-three/drei';



const MyShaderMaterial = shaderMaterial(
    { uTime: 0, uColor: new Color(1, 0.2, 1), uTexture: new Texture() },
    vertex,
    fragment
)

extend({MyShaderMaterial})


const Wave = () => {
    const ref = useRef()
    useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()))

    const [image] = useLoader(TextureLoader, ['test.webp'])
    return (
        <mesh>
            <planeBufferGeometry args={[0.4, 0.4, 16, 16]} />
            <myShaderMaterial  ref={ref} uTexture={image}/>
        </mesh>
    )
}
const Me = () => {
    return (
        <section id="me" className={styles.me}>
            <div className={styles.meMain}>
                <div className={styles.meMainContainer}>
                    <div className={styles.firstName}>
                        <p id='top' >ADEBAYO</p>
                        <p >A SOFTWARE</p>
                    </div>
                    <div data-scroll data-scroll-speed="1" className={styles.lastName}>
                        <p>OLOWOFOYEKU</p>
                        <p>DEVELOPER</p>
                    </div>
                    {/* <div className='spin'>
                        <img alt='spin' width={160} height={160} src='../media/scroll.svg' />
                    </div> */}
                </div>
            </div>
            <Canvas camera={{fov: 8, position: [0, 0, 5]}} style={{position: 'absolute', left: 0, top: 0, zIndex: -1}}>
                
                <Suspense fallback={null}>
                    <Wave />
                </Suspense>
            </Canvas>
        </section>
    );
}

export default Me;