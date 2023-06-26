import FormText from '../../../shared/FormText'
import FormInput from '../../../ui/inputs/FormInput'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { SigninValues_T } from '..'


const LoginField = ({ register, errors }: { register: UseFormRegister<SigninValues_T>, errors: FieldErrors<SigninValues_T> }) => {

    return <FormInput
        {...register('login', {
            required: 'Введите логин',
            maxLength: 20,
            pattern: {
                value: /^[a-z0-9]+$/i,
                message: 'Допустимы только латинские символы'
            },
        })}
        label={errors.login?.message}
        placeholder='Введите логин'
    />
}

export default LoginField