import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Pill from "../components/pill/Pill";
import { budgetRanges, deliveryPeriod, services } from "../data";
import styles from '../styles/contactStyles/contact.module.css'

const Contact = () => {
    const [service, setService] = useState()
    const [budget, setBudget] = useState()
    const [period, setPeriod] = useState()
    const [name, setName] = useState()
    const [company, setCompany] = useState()
    const [email, setEmail] = useState()
    const [details, setDetails] = useState()
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
                    <h2 style={{fontSize: '4vw', marginBottom: '70px', maxWidth: '800px', textAlign: 'center'}}>Please tell us more about you and your project.</h2>
                    <div className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <label for="full_name">Your Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} name="full_name" type={"text"} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label for="company">Company</label>
                            <input value={company} onChange={(e) => setCompany(e.target.value)} name="company" type={"text"} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label for="email">E-mail</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label for="brief">Project brief</label>
                            <textarea value={details} onChange={(e) => setDetails(e.target.value)} cols={30} rows={5} name="brief"></textarea> 
                        </div>
                    </div>
                    <div className={styles.contactButton}>
                        <p>Discuss Your Project</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;