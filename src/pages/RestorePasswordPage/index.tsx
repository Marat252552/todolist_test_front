import MainBackground from "../../shared/templates/backgrounds/MainBackground"
import AuthpageTemplate from "../../shared/templates/pages/AuthPageTemplate"
import FormContainer from "../../shared/templates/other/FormContainer"
import Form from "./elements/Form"



const RestorePasswordPage = () => {
    return <MainBackground>
        <AuthpageTemplate>
            <FormContainer>

                <Form />

            </FormContainer>
        </AuthpageTemplate>
    </MainBackground>
}

export default RestorePasswordPage