import styles from './Createcardbtn.module.css'
import Link from 'next/link'

export default function Createcardbtn() {
    return (
        <div className={styles.btnContainer}>
            <Link href="/createacard">
                <button className={styles.createcardbtn} href='/createacard'>Create Card</button>
            </Link>
        </div>
    )
}