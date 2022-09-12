import styles from '../styles/Createacard.module.css'

export default function Createacard() {
    return (
        <div className={styles.createacardContainer}>
            <div className={styles.createacard}>
                <div className={styles.createacardHeader}>
                    <h1>Create a BizCard</h1>
                </div>
                <div className={styles.createacardBody}>
                    <div className={styles.createacardBodyLeft}>
                        <h1>Card Name</h1>
                        <input type="text" placeholder="Enter your card name" />
                        <h1>Card Image</h1>
                        <input type="file" />
                        <h1>Card Description</h1>
                        <input type="text" placeholder="Enter your card description" />
                        <h1>Card Links</h1>
                        <input type="text" placeholder="Enter your card links" />
                    </div>
                    <div className={styles.createacardBodyRight}>
                        <h1>Card Preview</h1>
                        <div className={styles.cardPreview}>
                            <div className={styles.cardPreviewBody}>
                                <div className={styles.cardPreviewBodyLeft}>
                                    <h1>Card Name</h1>
                                    <div style={{width: "100px", height: "100px", backgroundColor: "white"}}></div>
                                    <p>Card Description</p>
                                    <p>
                                        <a href="mailto:">Send me an Email</a>
                                    </p>
                                </div>
                                <div className={styles.cardPreviewBodyRight}>
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
                </div>
            </div>
        </div>
    )
}