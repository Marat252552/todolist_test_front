import Option from '../../../ui/Option'
import { FormOptions_T } from '../lib/types'
import styles from './../lib/styles.module.css'


const FormOptions: FormOptions_T = ({ isLoginForm, toggleForm }) => (
    <div className={styles.options_module}>

        <div style={{ cursor: 'pointer' }} onClick={toggleForm}>
            <Option active={isLoginForm} value='Вход' />
        </div>

        <div style={{ cursor: 'pointer' }} onClick={toggleForm}>
            <Option active={!isLoginForm} value='Регистрация' />
        </div>

    </div>
)

export default FormOptions