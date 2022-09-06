import Head from "next/head";
import styles from "../styles/Bizcard.module.css";

export default function BizCard() {
    return (
        <><Head>
            <title>Maximilian S</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h1>Biz Card</h1>
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.cardBodyLeft}>
                        <h1>Maximilian S</h1>
                        <div style={{width: "100px", height: "100px", backgroundColor: "white"}}></div>
                        <p>Full Stack Software Engineer</p>
                        <p>
                            <a href="mailto:maximilianls@outlook.com">Send me an Email</a>
                        </p>
                    </div>
                    <div className={styles.cardBodyRight}>
                        <h2>My links</h2>
                        <p>
                            <a href="LinkedIn">LinkedIn</a>
                        </p>
                        <p>
                            <a href="Github">Github</a>
                        </p>
                        <p>
                            <a href="Resume">Resume</a>
                        </p>
                        <p>
                            <a href="Portfolio">Portfolio</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
