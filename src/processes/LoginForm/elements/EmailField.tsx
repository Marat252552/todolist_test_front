import FormInput from '../../../ui/inputs/FormInput'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { LoginValues_T } from '..'


const EmailField = ({ register, errors }: { register: UseFormRegister<LoginValues_T>, errors: FieldErrors<LoginValues_T> }) => {


    return <FormInput
        {...register('email', {
            required: 'Введите почту',
            maxLength: 50,
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Неверный формат почты'
            }
        })}
        label={errors.email?.message}
        placeholder='Введите почту'
    />
}

export default EmailField