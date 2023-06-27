import { useForm } from "react-hook-form"
import FormInput from "../../../ui/inputs/FormInput"
import FormButton from "../../../ui/buttons/FormButton"
import styles from './../lib/styles.module.css'
import { message } from "antd"
import claimRestoreLinkAPI from "../../../shared/api/actions/claimRestoreLink"
import { useState } from "react"
import Spinner from "../../../ui/Spinner"
import { useNavigate, useParams } from "react-router-dom"
import setNewPasswordAPI from "../../../shared/api/actions/setNewPasswordAPI"

type Values_T = {
    password: string,
    password2: string
}

const Form = () => {

    const { key } = useParams()

    const { register, formState: { errors }, handleSubmit } = useForm<Values_T>({
        mode: 'onSubmit'
    })
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const onSubmit = async ({ password }: Values_T) => {
        if (!key) return
        setLoading(true)
        try {
            const { data } = await setNewPasswordAPI({ password, key })
            const message_info = data?.message || 'Операция успешна'
            message.success(message_info)
            navigate('/login')
        } catch (e: any) {
            const message_info = e?.response?.data?.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        } finally {
            setLoading(false)
        }
    }

    return <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h3 className={styles.title}>Введите новый пароль</h3>
        <FormInput
            {...register('password', {
                required: 'Введите пароль',
                pattern: {
                    value: /^[a-z0-9]+$/i,
                    message: 'Допустимы только латинские символы'
                }
            })}
            label={errors.password?.message}
            type='password'
            placeholder='Введите пароль'
        />
        <FormInput
            {...register('password2', {
                required: 'Подтвердите пароль',
                validate: (value, formValues) => {
                    if (value !== formValues.password) {
                        return 'Пароли не совпадают'
                    }
                }
            })}
            label={errors.password2?.message}
            type='password'
            placeholder='Подтвердите пароль'
        />
        {
            loading ?
                <Spinner />
                :
                <FormButton>
                    Далее
                </FormButton>
        }

    </form>
}

export default Form