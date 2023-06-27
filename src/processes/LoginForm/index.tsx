import { useForm } from 'react-hook-form'
import styles from './lib/styles.module.css'
import FormText from '../../shared/FormText'
import FormButton from '../../ui/buttons/FormButton'
import EmailField from './elements/EmailField'
import PasswordField from './elements/PasswordField'
import CheckboxField from './elements/CheckboxField'
import { useAppDispatch } from '../../state/hooks'
import userSlice from '../../state/Reducers/UserReducer'
import { useState } from 'react'
import { message } from 'antd'
import loginAPI from '../../shared/api/actions/loginAPI'
import Spinner from '../../ui/Spinner'
import { useNavigate } from 'react-router-dom'

export type LoginValues_T = {
    email: string,
    password: string,
    remember: boolean
}

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginValues_T>({
        mode: 'onSubmit'
    })

    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { setUser } = userSlice.actions

    const onSubmit = async (values: LoginValues_T) => {
        setLoading(true)
        try {
            const {data} = await loginAPI(values)
            dispatch(setUser(values.email))
            localStorage.setItem('access_token', data.AccessToken)
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
                <EmailField
                    register={register}
                    errors={errors}
                />

                <PasswordField
                    register={register}
                    errors={errors}
                />

                <div style={{ display: 'flex', gap: '10px', width: '100%', alignItems: 'center' }}>
                    <CheckboxField
                        register={register}
                    />
                    <FormText>Запомнить меня</FormText>
                </div>


                {
                    loading ?
                        <Spinner />
                        :
                        <FormButton>
                            Войти
                        </FormButton>
                }
                <div className={styles.just_line}></div>
                <div onClick={() => navigate('/restore')} style={{ width: '100%', display: 'flex', cursor: 'pointer' }}>
                    <FormText>Забыли пароль?</FormText>
                </div>
            </div>

        </form>


    </>

}

export default LoginForm