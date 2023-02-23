import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
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
                    <Link href={'/'}><p>INDEX</p></Link>
                    <Link href={'/works'}><p>WORKS</p></Link>
                    <Link href={''}><p>RESUME</p></Link>
                    <Link href={'/'}><p>CONTACT</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;