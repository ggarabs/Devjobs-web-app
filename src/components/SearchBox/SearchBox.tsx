import { useRef } from 'react';
import styles from "./searchbox.module.css"

const SearchBox: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        alert(`Você pesquisou: ${inputRef.current?.value}`)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.container}>
                <input type="text" ref={inputRef} placeholder='Filter by Title...' className={styles.input} />
                <img src="filter.png" className={styles.filter} />
                <button type="submit" className={styles.button}>
                    <img src="magnifier.png" className={styles.img} />
                </button>
            </div>
        </form>
    )
}

export default SearchBox