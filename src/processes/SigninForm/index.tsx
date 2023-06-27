import { useForm } from 'react-hook-form'
import styles from './lib/styles.module.css'
import FormButton from '../../ui/buttons/FormButton'
import LoginField from './elements/LoginField'
import PasswordField from './elements/PasswordField'
import Password2Field from './elements/Password2Field'
import { useState } from 'react'
import { message } from 'antd'
import signinAPI from '../../shared/api/actions/signinAPI'
import { CircularProgress } from '@mui/material'


export type SigninValues_T = {
    email: string,
    password: string,
    password2: string,
    remember: boolean
}

const SigninForm = ({finishSignin}: {finishSignin: () => void}) => {

    const { register, handleSubmit, formState: { errors } } = useForm<SigninValues_T>()
    const [loading, setLoading] = useState(false)
    
    const onSubmit = async (values: SigninValues_T) => {
        console.log(values)
        setLoading(true)
        try {
            await signinAPI(values)
            finishSignin()
        } catch (e: any) {
            const message_info = e?.response?.data?.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        } finally {
            setLoading(false)
        }
    }

    return <>
    
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <LoginField
                    register={register}
                    errors={errors}
                />

                <PasswordField
                    register={register}
                    errors={errors}
                />

                <Password2Field
                    register={register}
                    errors={errors}
                />

                {
                    loading ?
                        <CircularProgress size={20} color='warning' />
                        :
                        <FormButton>
                            Создать аккаунт
                        </FormButton>
                }

            </div>

        </form>

    </>

}

export default SigninForm