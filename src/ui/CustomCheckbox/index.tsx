import { Checkbox } from '@mui/material'
import styles from './lib/styles.module.css'
import FormText from '../../shared/FormText'
import {forwardRef} from 'react'


const CustomCheckbox = forwardRef((props: any, ref: any) => {

    return <div>
        <Checkbox ref={ref} {...props} color='default' defaultChecked />
        <FormText>Запомнить меня</FormText>
    </div>
})

export default CustomCheckbox