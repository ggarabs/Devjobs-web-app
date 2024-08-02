import styles from "./header.module.css"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.h1}>devjobs</h1>
                <div className={styles.themeSwitcher}>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header