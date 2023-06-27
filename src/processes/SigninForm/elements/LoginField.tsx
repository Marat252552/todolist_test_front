import FormInput from '../../../ui/inputs/FormInput'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { SigninValues_T } from '..'


const EmailField = ({ register, errors }: { register: UseFormRegister<SigninValues_T>, errors: FieldErrors<SigninValues_T> }) => {

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