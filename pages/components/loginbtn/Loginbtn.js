import styles from './loginbtn.module.css'

export default function Loginbtn() {
    return (
        <div className={styles.btnContainer}>
            <button className={styles.loginbtn}>Login</button>
        </div>
    )
}