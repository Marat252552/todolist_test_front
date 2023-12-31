import { UseFormRegister } from 'react-hook-form'
import { LoginValues_T } from '..'
import CustomCheckbox from '../../../ui/CustomCheckbox'

const CheckboxField = ({ register }: { register: UseFormRegister<LoginValues_T> }) => {
    return <div style={{display: 'flex'}}>
        <CustomCheckbox
            {...register('remember')}
        />
    </div>
}

export default CheckboxField