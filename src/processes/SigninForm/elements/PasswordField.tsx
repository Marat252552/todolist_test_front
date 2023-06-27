import FormInput from '../../../ui/inputs/FormInput'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { SigninValues_T } from '..'


const PasswordField = ({ register, errors }: { register: UseFormRegister<SigninValues_T>, errors: FieldErrors<SigninValues_T> }) => {
    
    const minLengthMessage = (errors.password?.type === 'minLength')? 'Минимум 6 символов' : undefined
    const maxLengthMessage = (errors.password?.type === 'maxLength')? 'Максимум 50 символов' : undefined
    
    return <FormInput
        {...register('password', {
            required: 'Введите пароль',
            maxLength: 50,
            minLength: 6,
            pattern: {
                value: /^[a-z0-9]+$/i,
                message: 'Допустимы только латинские символы'
            }
        })}
        label={errors.password?.message || minLengthMessage || maxLengthMessage}
        type='password'
        placeholder='Введите пароль'
    />
}

export default PasswordField