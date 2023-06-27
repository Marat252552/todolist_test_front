import { useState } from 'react'
import LoginForm from '../../processes/LoginForm'
import SigninForm from '../../processes/SigninForm'
import AuthpageTemplate from '../../shared/templates/pages/AuthPageTemplate'
import MainBackground from '../../shared/templates/backgrounds/MainBackground'
import FormContainer from '../../shared/templates/other/FormContainer'
import OnSigninFinishModal from './elements/OnSigninFinishModal'
import FormOptions from './elements/FormOptions'


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

            <OnSigninFinishModal modalActive={modalActive} setModalActive={setModalActive} />

            <AuthpageTemplate>
                <FormContainer>
                    
                    <FormOptions isLoginForm={isLoginForm} toggleForm={toggleForm}/>

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