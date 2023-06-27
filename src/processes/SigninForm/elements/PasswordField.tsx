import FormInput from '../../../ui/inputs/FormInput'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { SigninValues_T } from '..'


const PasswordField = ({ register, errors }: { register: UseFormRegister<SigninValues_T>, errors: FieldErrors<SigninValues_T> }) => {
    return <FormInput
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
}

export default PasswordField