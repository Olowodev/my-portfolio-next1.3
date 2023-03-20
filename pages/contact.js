import Navbar from "../components/navbar/Navbar";
import Pill from "../components/pill/Pill";
import { budgetRanges, deliveryPeriod, services } from "../data";
import styles from '../styles/contactStyles/contact.module.css'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.contactCont}>
                <div className={styles.serviceSec}>
                    <p style={{fontSize: '4vw', marginBottom: '70px'}}>Which of my services do you need?</p>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {services.map((service, index) => (
                            <Pill text={service.title} />
                        ))}
                    </ul>
                </div>
                <div className={styles.serviceSec}>
                <p style={{fontSize: '4vw', marginBottom: '70px'}}>What is your budget range?</p>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {budgetRanges.map((budget, index) => (
                            <Pill text={budget.title} />
                        ))}
                    </ul>
                </div>
                <div className={styles.serviceSec}>
                <p style={{fontSize: '4vw', marginBottom: '70px'}}>Project Delivery Period</p>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {deliveryPeriod.map((period, index) => (
                            <Pill text={period.title} />
                        ))}
                    </ul>
                </div>
                <div className={styles.formWrapper}>
                    <p style={{fontSize: '4vw', marginBottom: '30px'}}>Please tell us more about you</p>
                    <div className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <input name="full_name" />
                            <label for="full_name">Your Name</label>
                        </div>
                        <div className={styles.inputWrapper}>
                            <input name="company" />
                            <label for="company">Company</label>
                        </div>
                        <div className={styles.inputWrapper}>
                            <input name="email" />
                            <label for="email">E-mail</label>
                        </div>
                        <div className={styles.inputWrapper}>
                            <textarea name="brief"></textarea> 
                            <label for="brief">Project brief</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;