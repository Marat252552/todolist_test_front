import { forwardRef } from 'react'
import FormInput from '../../../ui/inputs/FormInput'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { SigninValues_T } from '..'


const Password2Field = ({ register, errors }: { register: UseFormRegister<SigninValues_T>, errors: FieldErrors<SigninValues_T> }) => {
    return <FormInput
        {...register('password2', {
            required: 'Подтвердите пароль',
            validate: (value, formValues) => {
                if (value !== formValues.password) {
                    return 'Пароли не совпадают'
                }
            }
        })}
        label={errors.password2?.message}
        type='password'
        placeholder='Подтвердите пароль'
    />
}

export default Password2Field