import React, { forwardRef } from 'react'
import FormText from '../../../shared/FormText'
import FormInput from '../../../ui/inputs/FormInput'
import { UseFormRegister } from 'react-hook-form'
import { SigninValues_T } from '..'


const PasswordField = ({ register }: { register: UseFormRegister<SigninValues_T> }) => {
    return <FormInput
        {...register('password', {
            required: 'Введите пароль',
            pattern: {
                value: /^[a-z0-9]+$/i,
                message: 'Допустимы только латинские символы'
            }
        })}
        type='password'
        placeholder='Введите пароль'
    />
}

export default PasswordField