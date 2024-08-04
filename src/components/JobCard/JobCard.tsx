import styles from "./jobcard.module.css"

interface JobCardProps {
    imagePath: string,
    publicationTime: string,
    mode: string,
    title: string,
    company: string,
    location: string
}

const JobCard = ({ imagePath, publicationTime, mode, title, company, location }: JobCardProps) => {
    return (
        <div className={styles.container}>
            <img src={imagePath} className={styles.logo} />
            <div className={styles.card}>
                <div className={styles.jobMainInformation}>
                    <div className={styles.jobInformation}>
                        <p className={styles.jobTime}>{publicationTime}</p>
                        <div className={styles.jobModeContainer}>
                            <img src="littleBallChar.png" />
                            <p className={styles.jobMode}>{mode}</p>
                        </div>
                    </div>
                    <h2 className={styles.jobTitle}>{title}</h2>
                    <p className={styles.jobCompany}>{company}</p>
                </div>
                <p className={styles.jobLocation}>{location}</p>
            </div>
        </div >
    )
}

export default JobCard