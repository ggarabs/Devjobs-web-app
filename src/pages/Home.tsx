import Header from './../components/Header/Header'
import SearchBox from './../components/SearchBox/SearchBox'
import JobCard from '../components/JobCard/JobCard'
import Button from '../components/Button/Button'
import styles from './../styles/home.module.css'
import data from './../assets/jobs.json'

const Home: React.FC = () => {
    return (
        <>
            <div className={styles.headerContainer}>
                <Header />
                <div className={styles.searchBox}>
                    <SearchBox />
                </div>
            </div>
            <div className={styles.contentContainer}>
                {data.jobs.map((job, index) => {
                    const { imagePath, publicationTime, mode, title, company, location } = job
                    return (
                        <JobCard
                            key={index}
                            imagePath={imagePath}
                            publicationTime={publicationTime}
                            mode={mode}
                            title={title}
                            company={company}
                            location={location}
                        />
                    )
                })}
            </div >
            <div className={styles.buttonContainer}>
                <Button />
            </div>
        </>
    )
}

export default Home