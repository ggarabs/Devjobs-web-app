import styles from "./header.module.css"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img src="./triangle1.png" className={styles.triangle} />
            <img src="./triangle2.png" className={styles.triangle2} />
            <img src="./triangle3.png" className={styles.triangle3} />
            <div className={styles.container}>
                <h1 className={styles.h1}>
                    devjobs
                </h1>
                <div className={styles.themeSwitcher}>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header