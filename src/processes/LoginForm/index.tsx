import { useForm } from 'react-hook-form'
import styles from './lib/styles.module.css'
import FormInput from '../../ui/inputs/FormInput'
import FormText from '../../shared/FormText'
import CustomCheckbox from '../../ui/CustomCheckbox'
import FormButton from '../../ui/buttons/FormButton'
import LoginField from './elements/LoginField'
import PasswordField from './elements/PasswordField'
import CheckboxField from './elements/CheckboxField'
import { CircularProgress } from '@mui/material'
import { useAppDispatch } from '../../state/hooks'
import userSlice from '../../state/Reducers/UserReducer'
import {useState} from 'react'
import { message } from 'antd'
import loginAPI from '../../shared/api/actions/loginAPI'
import Spinner from '../../ui/Spinner'

export type LoginValues_T = {
    login: string,
    password: string,
    remember: boolean
}

const LoginForm = () => {

    const { register, handleSubmit } = useForm<LoginValues_T>()

    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()
    const { setUser } = userSlice.actions

    const onSubmit = async (values: LoginValues_T) => {
        setLoading(true)
        try {
            await loginAPI(values)
            dispatch(setUser(values.login))
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
                />

                <PasswordField
                    register={register}
                />

                <CheckboxField
                    register={register}
                />

                {
                    loading ?
                        <Spinner />
                        :
                        <FormButton>
                            Создать аккаунт
                        </FormButton>
                }
            </div>

        </form>

    </>

}

export default LoginForm