import styles from './lib/styles.module.css'


const MainBackground = ({children}: {children: any}) => (
    <div className={styles.background}>
        {children}
    </div>
)

export default MainBackground