import FormText from '../../../shared/FormText'
import FormInput from '../../../ui/inputs/FormInput'
import { UseFormRegister } from 'react-hook-form'
import { SigninValues_T } from '..'


const LoginField = ({ register }: { register: UseFormRegister<SigninValues_T> }) => {

    return <FormInput
        {...register('login', {
            required: 'Введите логин',
            maxLength: 20,
            pattern: {
                value: /^[a-z0-9]+$/i,
                message: 'Допустимы только латинские символы'
            },
        })}
        placeholder='Введите логин'
    />
}

export default LoginField