import styles from '../styles/homeStyles/Contact.module.css'
import { FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { useRouter } from 'next/router';


const Contact = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/contact')
    }
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>
                <div className={styles.contactHeader}>
                    <p>NEED MY SERVICES?</p>
                    <p>LET&apos;S TALK</p>
                </div>
                <div className={styles.contactButtonContainer}>
                    <div onClick={handleClick} className={styles.contactButton}>
                        <p>Discuss Your Project</p>
                    </div>
                </div>
                <div className={styles.socials}>
                    <a target='_blank' href='https://twitter.com/olowoo_a'>
                        <FaTwitter className={styles.social} style={{zIndex: 2, '--color': '#000', mixBlendMode: 'difference'}} />
                    </a>
                    <a target='_blank' href='https://instagram.com/olowoo_a'>
                        <FaInstagram className={styles.social} style={{zIndex: 2, '--color': '#000', mixBlendMode: 'difference'}} />
                    </a>
                    <a target='_blank' href=''>
                        <FaWhatsapp className={styles.social} style={{zIndex: 2, '--color': '#000', mixBlendMode: 'difference'}} />
                    </a>
                    <a target='_blank' href='https://github.com/Olowodev'>
                        <FaGithub className={styles.social} style={{zIndex: 2, '--color': '#000', mixBlendMode: 'difference'}} />
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