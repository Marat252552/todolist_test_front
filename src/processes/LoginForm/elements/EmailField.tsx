import FormInput from '../../../ui/inputs/FormInput'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { LoginValues_T } from '..'


const EmailField = ({ register, errors }: { register: UseFormRegister<LoginValues_T>, errors: FieldErrors<LoginValues_T> }) => {

    const minLengthMessage = (errors.email?.type === 'minLength')? 'Минимум 6 символов' : undefined
    const maxLengthMessage = (errors.email?.type === 'maxLength')? 'Максимум 50 символов' : undefined

    return <FormInput
        {...register('email', {
            required: 'Введите почту',
            maxLength: 50,
            minLength: 6,
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Неверный формат почты'
            }
        })}
        label={errors.email?.message || minLengthMessage || maxLengthMessage}
        placeholder='Введите почту'
    />
}

export default EmailField