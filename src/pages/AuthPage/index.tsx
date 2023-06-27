import { useState } from 'react'
import LoginForm from '../../processes/LoginForm'
import styles from './lib/styles.module.css'
import Option from './elements/Option'
import SigninForm from '../../processes/SigninForm'
import AuthpageTemplate from '../../shared/templates/pages/AuthPageTemplate'
import Modal from '../../shared/Modal'
import MainBackground from '../../shared/templates/backgrounds/MainBackground'
import FormText from '../../shared/FormText'
import FormContainer from '../../shared/templates/other/FormContainer'


const AuthPage = () => {

    const [isLoginForm, setIsLoginForm] = useState(true)
    const [modalActive, setModalActive] = useState(false)

    const toggleForm = () => {
        setIsLoginForm(prev => !prev)
    }

    const finishSignin = () => {
        setIsLoginForm(true)
        setModalActive(true)
    }

    return (
        <MainBackground>

            <Modal active={modalActive} setActive={setModalActive}>
                <p>На указанную Вами почту отправлено письмо с ссылкой для подтверждения.</p>
                <p>Перейдите по ней, чтобы закончить регистрацию аккаунта</p>
            </Modal>

            <AuthpageTemplate>
                <FormContainer>
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
                            <SigninForm finishSignin={finishSignin} />
                    }
                </FormContainer>



            </AuthpageTemplate>

        </MainBackground>

    )
}

export default AuthPage