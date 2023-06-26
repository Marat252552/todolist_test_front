import styles from './lib/styles.module.css'


const AuthpageTemplate = ({children}: {children :any}) => {
    return <div className={styles.max_width_container}>
        <div className={styles.wrapper}>
            {children}
        </div>
    </div>
}

export default AuthpageTemplate