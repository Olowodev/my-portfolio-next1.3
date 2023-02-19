import styles from '../styles/homeStyles/Contact.module.css'
import { FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'


const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>
                <div className={styles.contactHeader}>
                    <p>NEED MY SERVICES?</p>
                    <p>LET&apos;S TALK</p>
                </div>
                <div className={styles.contactButtonContainer}>
                    <div className={styles.contactButton}>
                        <p>Discuss Your Project</p>
                    </div>
                </div>
                <div className={styles.socials}>
                    <a href='https://twitter.com/olowoo_a'>
                        <FaTwitter className={styles.social} style={{zIndex: 2, '--color': '#000'}} />
                    </a>
                    <a href='https://instagram.com/olowoo_a'>
                        <FaInstagram className={styles.social} style={{zIndex: 2, '--color': '#000'}} />
                    </a>
                    <a href=''>
                        <FaWhatsapp className={styles.social} style={{zIndex: 2, '--color': '#000'}} />
                    </a>
                    <a href='https://github.com/Olowodev'>
                        <FaGithub className={styles.social} style={{zIndex: 2, '--color': '#000'}} />
                    </a>
                </div>
                <div className={styles.credit}>
                    <p>&#169;2022 Adebayo olowofoyeku, All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;