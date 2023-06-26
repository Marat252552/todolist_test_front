import { Button } from '@mui/material'
import styles from './lib/styles.module.css'

const style = {
    width: '100%',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#EEC110',
    color: 'white',
    fontFamily: 'Montserrat'
}

const FormButton = ({children}: {children: string}) => {
    
    return <Button style={style} type='submit' color='warning' className={styles.form_button}>
        {children}
    </Button>
}

export default FormButton