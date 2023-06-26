import { forwardRef } from 'react'
import TransparentInput from '../TransparentInput'
import styles from './lib/styles.module.css'
import FormText from '../../../shared/FormText'


const FormInput = forwardRef((props: any, ref: any) => {

    return <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%', alignItems: 'center' }}>
        {props.label && <div className={styles.label}>
            <FormText>
                {props.label}
            </FormText>
        </div>}

        <div className={styles.container}>
            <TransparentInput ref={ref} {...props} />
        </div>
    </div>

})

export default FormInput