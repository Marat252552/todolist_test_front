import { Checkbox } from '@mui/material'
import { forwardRef } from 'react'


const CustomCheckbox = forwardRef((props: any, ref: any) => (
    <Checkbox ref={ref} {...props} color='default' />
))

export default CustomCheckbox