import styles from './lib/styles.module.css'


const FormContainer = ({children}: {children: any}) => {
    return <div className={styles.form_container}>
        {children}
    </div>
}

export default FormContainer