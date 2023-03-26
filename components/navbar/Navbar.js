import gsap from 'gsap';
import Link from 'next/link';
import { useRef, useState } from 'react';
import styles from './navbar.module.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [close, setClose] = useState(false)
    const ref = useRef()
    const path = useRef()
    const text = useRef()

    const toggle = () => {
        if (!menu) {
            setMenu(true)
        } else {
            setClose(true)
        }
    }
    const linkToggle = () => {
        setMenu(!menu)
    }

    if (menu) {
        gsap.timeline({})
        .set(document.getElementsByClassName('menuText'), {
            y: '100%'
        })
        .set(path.current, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z'}
        })
        .to(path.current, {
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z'}
        }, 0)
        .to(path.current, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z'}
        })
        
        .to(document.getElementsByClassName('menuText'), {
            y: 0,
            stagger: true
        })
    }
    if(close) {
        gsap.timeline({
            
        })
        .set(path.current, { 
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
        })
        .to(path.current, { 
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        }, 0)
        .to(path.current, { 
            duration: 0.7,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
            onComplete: () => {
                setMenu(false);
                setClose(false)
            }
        })
    }

    const downloadPDF = () => {
        const pdfURL = 'resume.pdf'
        const fileName = "Adebayo's resume"
        fetch(pdfURL)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = fileName
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                window.URL.revokeObjectURL(url)
            })
    }
    return (
        <div>
            <div className={styles.navBar}>
                <div onClick={() => toggle()} className={styles.menuButton}>
                    <p>{!menu ? 'MENU' : 'CLOSE'}</p>
                    <p>{!menu ? 'MENU' : 'CLOSE'}</p>
                </div>
            </div>

            <div className={`${styles.menu} ${menu ? styles.show : null}`}>
                <svg className={styles.overlay} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path ref={path} stroke='#333' fill='#333' className={styles.overlay__path} vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
                </svg>
                <div className={styles.menuCont}>
                    <div>
                    <Link onClick={linkToggle} href={'/'}><p ref={text} className='menuText'>INDEX</p></Link>
                    </div>
                    <div>
                    <Link onClick={linkToggle} href={'/works'}><p className='menuText'>WORKS</p></Link>
                    </div>
                    <div>
                    <Link ref={ref} onClick={downloadPDF} href={''}><p className='menuText'>RESUME</p></Link>
                    </div>
                    <div>
                    <Link onClick={linkToggle} href={'/contact'}><p className='menuText'>CONTACT</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;