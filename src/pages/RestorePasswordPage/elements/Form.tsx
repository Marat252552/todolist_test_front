import { useForm } from "react-hook-form"
import FormInput from "../../../ui/inputs/FormInput"
import FormButton from "../../../ui/buttons/FormButton"
import styles from './../lib/styles.module.css'
import { message } from "antd"
import claimRestoreLinkAPI from "../../../shared/api/actions/claimRestoreLink"
import { useState } from "react"
import Spinner from "../../../ui/Spinner"

type Values_T = {
    email: string
}

const Form = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<Values_T>({
        mode: 'onSubmit'
    })

    const [loading, setLoading] = useState(false)

    const onSubmit = async ({ email }: Values_T) => {
        setLoading(true)
        try {
            const { data } = await claimRestoreLinkAPI({ email })
            const message_info = data?.message || 'Операция успешна'
            message.success(message_info)
        } catch (e: any) {
            const message_info = e?.response?.data?.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        } finally {
            setLoading(false)
        }
    }

    return <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormInput
            {...register('email', {
                required: true,
                maxLength: 50,
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Неверный формат почты'
                }
            })}
            label={errors.email?.message}
            placeholder='Укажите привязанную почту'
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