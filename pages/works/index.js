import Navbar from "../../components/navbar/Navbar";
import styles from '../../styles/workStyles/works.module.css'

const Works = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className={styles.marquee}>
                    <div className={styles.marquee_inner} ariaHidden='true'>
                    <span>WORK</span>
                    <span>WORK</span>
                    <span>WORK</span>
                    <span>WORK</span>
                    <span>WORK</span>
                    <span>WORK</span>
                    </div>
                    
                </div>
                {/* <div className={styles.box}>

                </div> */}
            </div>
        </div>
    );
}

export default Works;