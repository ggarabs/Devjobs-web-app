import { useEffect } from "react"
import { useTheme } from './../../contexts/ThemeContext';
import styles from "./themeswitcher.module.css"

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode'
    }, [theme])

    const themeClass = styles[`${theme}-mode`] as keyof typeof styles

    return (
        <div className={styles.container}>
            <img src="sun.png" className={styles.img} />
            <button className={styles.rectangle} onClick={toggleTheme}>
                <img src="Rectangle.png" className={styles.rectangleImg} />
                <img src="bluecircle.png" className={`${styles.blueCircle} ${themeClass}`} />
            </button>
            <img src="moon.png" className={styles.img} />
        </div >
    )
}

export default ThemeSwitcher