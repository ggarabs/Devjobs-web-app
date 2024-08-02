import Header from './../components/Header/Header'
import SearchBox from './../components/SearchBox/SearchBox'
import styles from './../styles/home.module.css'

const Home: React.FC = () => {
    return (
        <>
            <div className={styles.headerContainer}>
                <Header />
                <div className={styles.searchBox}>
                    <SearchBox />
                </div>
            </div>
        </>
    )
}

export default Home