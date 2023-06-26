import { useForm } from 'react-hook-form'
import styles from './lib/styles.module.css'
import FormInput from '../../ui/inputs/FormInput'
import FormText from '../../shared/FormText'
import CustomCheckbox from '../../ui/CustomCheckbox'
import FormButton from '../../ui/buttons/FormButton'
import LoginField from './elements/LoginField'
import PasswordField from './elements/PasswordField'
import CheckboxField from './elements/CheckboxField'
import Password2Field from './elements/Password2Field'
import { useState } from 'react'
import { message } from 'antd'
import signinAPI from '../../shared/api/actions/signinAPI'
import { useAppDispatch } from '../../state/hooks'
import userSlice from '../../state/Reducers/UserReducer'
import { CircularProgress } from '@mui/material'

export type SigninValues_T = {
    login: string,
    password: string,
    password2: string,
    remember: boolean
}

const SigninForm = () => {

    const { register, handleSubmit } = useForm<SigninValues_T>()
    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()
    const { setUser } = userSlice.actions

    const onSubmit = async (values: SigninValues_T) => {
        setLoading(true)
        try {
            await signinAPI(values)
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

                <Password2Field
                    register={register}
                />

                <CheckboxField
                    register={register}
                />

                {
                    loading ?
                        <CircularProgress size={20} color='warning' />
                        :
                        <FormButton>
                            Войти
                        </FormButton>
                }

            </div>

        </form>

    </>

}

export default SigninForm