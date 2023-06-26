import React, { forwardRef } from 'react'
import FormText from '../../../shared/FormText'
import FormInput from '../../../ui/inputs/FormInput'
import { UseFormRegister } from 'react-hook-form'
import { LoginValues_T } from '..'


const PasswordField = ({ register }: { register: UseFormRegister<LoginValues_T> }) => {
    return <FormInput
        {...register('password', {
            required: 'Введите пароль',
            pattern: {
                value: /^[a-z0-9]+$/i,
                message: 'Допустимы только латинские символы'
            }
        })}
        placeholder='Введите пароль'
    />
}

export default PasswordField