import { useState } from 'react'
import LoginForm from '../../processes/LoginForm'
import styles from './lib/styles.module.css'
import Option from './elements/Option'
import SigninForm from '../../processes/SigninForm'
import AuthpageTemplate from '../../shared/templates/pages/AuthPageTemplate'


const LoginPage = () => {

    const [isLoginForm, setIsLoginForm] = useState(true)

    const toggleForm = () => {
        setIsLoginForm(prev => !prev)
    }

    return (
        <div className={styles.background}>
            <AuthpageTemplate>

                <div className={styles.form_container}>
                    <div className={styles.options_module}>

                        <div style={{ cursor: 'pointer' }} onClick={toggleForm}>
                            <Option active={isLoginForm} value='Вход' />
                        </div>

                        <div style={{ cursor: 'pointer' }} onClick={toggleForm}>
                            <Option active={!isLoginForm} value='Регистрация' />
                        </div>

                    </div>
                    {
                        isLoginForm ?
                            <LoginForm />
                            :
                            <SigninForm />
                    }
                </div>

            </AuthpageTemplate>
        </div>
    )
}

export default LoginPage