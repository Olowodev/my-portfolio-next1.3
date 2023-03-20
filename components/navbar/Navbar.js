import Link from 'next/link';
import { useRef, useState } from 'react';
import styles from './navbar.module.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const ref = useRef()

    const toggle = () => {
        setMenu(!menu)
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
                <div onClick={()=>setMenu(!menu)} className={styles.menuButton}>
                    <p>{!menu ? 'MENU' : 'CLOSE' }</p>
                    <p>{!menu ? 'MENU' : 'CLOSE' }</p>
                </div>
            </div>

            <div className={`${styles.menu} ${menu ? styles.show : null}`}>
                <div className={styles.menuCont}>
                    <Link onClick={toggle} href={'/'}><p>INDEX</p></Link>
                    <Link onClick={toggle} href={'/works'}><p>WORKS</p></Link>
                    <Link ref={ref} onClick={downloadPDF} href={''}><p>RESUME</p></Link>
                    <Link onClick={toggle} href={'/contact'}><p>CONTACT</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;