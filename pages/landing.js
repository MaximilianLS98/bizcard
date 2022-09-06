import Head from "next/head"
import styles from "../styles/landing.module.css"

export default function Landing() {
    return (
        <>
            <Head>
                <title>Modern BizCard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.landingContainer}>
                <div className={styles.landing}>
                    <div className={styles.landingHeader}>
                        <h1>Modern BizCard creator</h1>
                    </div>
                    <div className={styles.landingBody}>
                        <h1>What is this?</h1>
                        <p>
                            This is a modern business card creator. You can create a business card with your own information and share it with your friends and new connections.
                        </p>
                        <h1>How do I use it?</h1>
                        <p>
                            You can create a business card by clicking the Create a BizCard button below. You can then edit your business card by clicking the "Edit" button on the top right of the page. You can also share your business card by clicking the "Share" button on the top right of the page.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
