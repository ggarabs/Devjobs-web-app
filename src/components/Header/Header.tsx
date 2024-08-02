import styles from "./header.module.css"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>devjobs</h1>
            <ThemeSwitcher />
        </header>
    )
}

export default Header