import { useState } from 'react'
import styles from './pill.module.css'

const Pill = ({text, onClick}) => {
    const [clicked, setClicked] = useState(false)
    const click = () => {
        setClicked(!clicked)
        onClick()
    }
    return (
        <li style={{color: clicked && 'black', backgroundColor: clicked && 'white'}} onClick={click} className={styles.pill}>
            {text}
        </li>
    );
}

export default Pill;