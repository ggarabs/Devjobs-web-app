import styles from "./themeswitcher.module.css"

const ThemeSwitcher: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src="sun.png" className={styles.img} />
            <button className={styles.rectangle}>
                <img src="Rectangle.png" className={styles.rectangleImg} />
                <img src="bluecircle.png" className={styles.blueCircle}/>
            </button>
            <img src="moon.png" className={styles.img} />
        </div>
    )
}

export default ThemeSwitcher