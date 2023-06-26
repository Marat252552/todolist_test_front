import { UseFormRegister } from 'react-hook-form'
import { SigninValues_T } from '..'
import CustomCheckbox from '../../../ui/CustomCheckbox'

const CheckboxField = ({ register }: { register: UseFormRegister<SigninValues_T> }) => {
    return <div style={{ width: '100%', display: 'flex' }}>
        <CustomCheckbox
            {...register('remember')}
        />
    </div>

}

export default CheckboxField