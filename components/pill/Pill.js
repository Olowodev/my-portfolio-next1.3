import styles from './pill.module.css'

const Pill = ({text}) => {
    return (
        <li className={styles.pill}>
            {text}
        </li>
    );
}

export default Pill;