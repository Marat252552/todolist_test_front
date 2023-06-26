import styles from './lib/styles.module.css'


const FormButton = ({children}: {children: string}) => {

    return <button className={styles.form_button}>
        {children}
    </button>
}

export default FormButton