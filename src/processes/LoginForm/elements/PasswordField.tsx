import FormInput from '../../../ui/inputs/FormInput'
import { PasswordField_T } from '../lib/types'


const PasswordField: PasswordField_T = ({ register, errors }) => {
    
    const minLengthMessage = (errors.password?.type === 'minLength')? 'Минимум 6 символов' : undefined
    const maxLengthMessage = (errors.password?.type === 'maxLength')? 'Максимум 50 символов' : undefined
    
    return <FormInput
        {...register('password', {
            required: 'Введите пароль',
            pattern: {
                value: /^[a-z0-9]+$/i,
                message: 'Допустимы только латинские символы'
            }
        })}
        type='password'
        label={errors.password?.message || minLengthMessage || maxLengthMessage}
        placeholder='Введите пароль'
    />
}

export default PasswordField