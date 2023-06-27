import FormInput from '../../../ui/inputs/FormInput'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { LoginValues_T } from '..'


const PasswordField = ({ register, errors }: { register: UseFormRegister<LoginValues_T>, errors: FieldErrors<LoginValues_T> }) => {
    return <FormInput
        {...register('password', {
            required: 'Введите пароль',
            pattern: {
                value: /^[a-z0-9]+$/i,
                message: 'Допустимы только латинские символы'
            }
        })}
        type='password'
        label={errors.password?.message}
        placeholder='Введите пароль'
    />
}

export default PasswordField