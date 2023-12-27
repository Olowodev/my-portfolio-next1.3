import { Html, shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRouter } from "next/router";
import { Suspense, useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import Navbar from "../../components/navbar/Navbar";

import styles from '../../styles/workStyles/works.module.css'
import * as THREE from 'three'
import { Color, Texture, TextureLoader, Vector3 } from "three";
import { workGallery, workSlideShow } from "../../data";
import fragment from "raw-loader!glslify-loader!../../shaders/fragment.frag"
import vertex from "raw-loader!glslify-loader!../../shaders/vertex.vert"
import gsap from "gsap";
import { Plane } from 'react-curtains'
import fragment2 from "raw-loader!glslify-loader!../../shaders/fragment2.frag"
import vertex2 from "raw-loader!glslify-loader!../../shaders/vertex2.vert"
import { Curtains, useCurtainsEvent } from "react-curtains";
import Head from "next/head";
import { FaExternalLinkAlt } from "react-icons/fa";
import {AiOutlineLink} from 'react-icons/ai'



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
            <planeGeometry args={[0.4, 0.4, 16, 16]} />
            <myShaderMaterial  ref={ref} uTexture={image}/>
        </mesh>
    )
}


const SlideShaderMaterial01 = shaderMaterial(
    { uVelo: 0, uTime: 0, uHover: 0, uColor: new Color(1, 0.2, 1), uTexture: new Texture(), uMouse: new Vector3(), uPosition: new Vector3(), uProgress: 0, uMeshScale: new THREE.Vector2(1, 1), uMeshPosition: new THREE.Vector2(0, 0), uViewSize: new THREE.Vector2(1, 1) },
    vertex2,
    fragment2
)

extend({ SlideShaderMaterial01 })

const HTML = ({ hovered, textRef, title }) => {
    const animate = (node) => {
        gsap.from(node, {
            y: '100%'
        })
    }
    const animateOut = (node) => {
        gsap.to(node, {
            y: '100%'
        })
    }

    return (
        <Html center style={{ pointerEvents: 'none', mixBlendMode: 'difference', backgroundColor: 'transparent' }}>
            <div style={{ overflow: 'hidden', height: '10vw' }}>
                <Transition
                    in={hovered}
                    onEnter={node => { animate(node) }}
                    onExit={node => { animateOut(node) }}
                    unmountOnExit
                    mountOnEnter
                    timeout={500}
                >
                    <p ref={textRef} id='workName' style={{ fontFamily: 'dharma M', fontSize: '10vw', mixBlendMode: 'difference', color: 'rgba(255, 255, 255, 0.9)', letterSpacing: '5px' }}>{title}</p>
                </Transition>
            </div>

        </Html>
    )
}

const Picture01 = ({ velo, cover, index, state, title }) => {
    const ref = useRef()
    const meshRef = useRef()
    const textRef = useRef()
    const ref2 = useRef()
    const [hovered, setHovered] = useState(false)
    const router = useRouter()
    const {gl} = useThree()
    useEffect(() => {
        // gl.domElement.addEventListener('webglcontextloss', ()=>{
        //     console.log('testing')
        //     gl.forceContextRestore()
        // })
    //     console.log(gl.getContext())
    //     setTimeout(()=> {
    //         gl.forceContextRestore()

    //     console.log('restored2')
    // }, 1000)

    return ()=> {
        gl.forceContextLoss()
    }
        
    }, [])

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
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()))
    useFrame(() => {
        // meshRef.current.position.x = (1.5 * index + 1)
        ref.current.uPosition = meshRef.current.position

    })

    if (hovered) {
        gsap.from(textRef.current, {
            y: 10
        })
    }


    const [image] = useLoader(TextureLoader, [cover])
    return (
        <>
            <mesh onClick={() => navigate()} onPointerEnter={() => onHover(1)} onPointerLeave={() => onHover(0)} onPointerMove={(e) => mouse(e)} ref={meshRef}>
                <planeBufferGeometry ref={ref2} args={[1, 0.7, 16, 16]} />
                <slideShaderMaterial01 uVelo={velo} ref={ref} uTexture={image} />


                {/* <HTML title={title} hovered={hovered} textRef={textRef} /> */}

            </mesh>
        </>
    )
}

// const images = [
//     {
//         id: 1,
//         img: 'abstract1.webp',
//     },
// ]

const Works = () => {
    const [hover, setHover] = useState(false)
    

    return (
        <div className={`${styles.works} works ${hover ? styles.bgHover : null}`}>
            <Head>
        <title>Adebayo Olowofoyeku</title>
        <meta name="description" content="Adebayo Olowofoyeku's portfolio. A full stack developer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Scope+One&display=swap" rel="stylesheet"></link>
      </Head>
            {/* <Navbar /> */}
            <div style={{ position: 'relative' }}>
                <div className={styles.marquee}>
                    <div className={styles.marquee_inner} aria-hidden='true'>
                        <span>WORKS</span>
                        <span>WORKS</span>
                        <span>WORKS</span>
                        <span>WORKS</span>
                        <span>WORKS</span>
                        <span>WORKS</span>
                    </div>

                </div>
                <div className={styles.gridWrapper}>
                    <div className={styles.grid}>
                        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={styles.cell}>
                            <a href="https://orpheus-nft-site.netlify.app" target={'_blank'}>
                            <div className={styles.wrapLink}>
                            <img src="./abstract1.png" />
                            </div>
                            <div className={styles.absolute}>
                                <p>Orpheus</p>
                                <AiOutlineLink />
                            </div>
                            </a>
                        </div>
                        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={styles.cell}>
                            <a href="https://music-olowo.netlify.app" target={'_blank'}>
                            <div className={styles.wrapLink}>
                            <img src="./abstract2.png" />
                            </div>
                            <div className={styles.absolute}>
                                <p>Music App</p>
                                <AiOutlineLink />
                            </div>
                            </a>
                        </div>
                        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={styles.cell}>
                            <a href="https://gis-vanilla.netlify.app" target={'_blank'}>
                            <div className={styles.wrapLink}>
                            <img src="./abstract3.png" />
                            </div>
                            <div className={styles.absolute}>
                                <p>GIS Web</p>
                                <AiOutlineLink />
                            </div>
                            </a>
                        </div>
                        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={styles.cell}>
                            <a href="https://thedecalmasters.com" target={'_blank'}>
                            <div className={styles.wrapLink}>
                            <img src="./abstract4.jpg" />
                            </div>
                            <div className={styles.absolute}>
                                <p>Decal</p>
                                <AiOutlineLink />
                            </div>
                            </a>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {/* <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className="BasicPlane">
                        <img className="img" src="/abstract2.jpg" />
                    </Plane> */}
                {/* <div className={styles.gallery}>
                    <div className={styles.figureWrapper}>
                        <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                            <img className="img" src="/abstract1.webp" />
                        </Plane>
                    </div>
                    <div className={styles.figureWrapper}>
                        <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                            <img className="img" src="/abstract2.jpg" />
                        </Plane>
                    </div>
                    <div className={styles.figureWrapper}>
                        <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                            <img className="img" src="/abstract3.jpg" />
                        </Plane>
                    </div>
                    <div className={styles.figureWrapper}>
                        <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                            <img className="img" src="/abstract4.jpg" />
                        </Plane>
                    </div>
                    <div className={styles.figureWrapper}>
                        <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                            <img className="img" src="/abstract1.webp" />
                        </Plane>
                    </div>
                    <div className={styles.figureWrapper}>
                        <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                            <img className="img" src="/abstract2.jpg" />
                        </Plane>
                    </div>
                    <div className={styles.figureWrapper}>
                        <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                            <img className="img" src="/abstract3.jpg" />
                        </Plane>
                    </div>
                        <div className={styles.figureWrapper}>
                            <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                                <img className="img" src="/abstract4.jpg" />
                            </Plane>
                        </div>
                        <div className={styles.figureWrapper}>
                            <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                                <img className="img" src="/abstract1.webp" />
                            </Plane>
                        </div>
                        <div className={styles.figureWrapper}>
                            <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                                <img className="img" src="/abstract2.jpg" />
                            </Plane>
                        </div>
                        <div className={styles.figureWrapper}>
                            <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                                <img className="img" src="/abstract3.jpg" />
                            </Plane>
                        </div>
                        <div className={styles.figureWrapper}>
                            <Plane vertexShader={slideVertex} fragmentShader={slideFragment} className={styles.figure}>
                                <img className="img" src="/abstract4.jpg" />
                            </Plane>
                        </div>
                    </div> */}

                    {/* <div className={styles.box}>

                </div> */}
                    {/* <Canvas camera={{fov: 8, position: [0, 0, 10]}} style={{position: 'absolute', left: 0, top: 0, zIndex: 200}}>
                
                <Suspense fallback={null}>
                {workGallery.map((slide, index) => (
                        <Picture01 key={slide.id} index={index} {...slide} />
                    ))}
                </Suspense>
            </Canvas> */}
            {/* <Canvas camera={{fov: 8, position: [0, 0, 5]}} style={{position: 'absolute', left: 0, top: 0, zIndex: 100}}>
                
                <Suspense fallback={null}>
                    <Wave />
                </Suspense>
            </Canvas> */}
                </div>
            </div>
            );
}

            export default Works;
