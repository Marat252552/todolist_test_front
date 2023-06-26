import FormText from '../../../shared/FormText'
import FormInput from '../../../ui/inputs/FormInput'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { LoginValues_T } from '..'


const EmailField = ({ register, errors }: { register: UseFormRegister<LoginValues_T>, errors: FieldErrors<LoginValues_T> }) => {


    return <FormInput
        {...register('login', {
            required: 'Введите логин',
            maxLength: 20,
            pattern: {
                value: /^[a-z0-9]+$/i,
                message: 'Только латинские символы'
            },
        })}
        label={errors.login?.message}
        placeholder='Введите логин'
    />
}

export default EmailField