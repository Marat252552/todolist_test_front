import { Button } from '@mui/material'
import styles from './lib/styles.module.css'
import { useAppSelector } from '../../state/hooks'
import LogoutButton from './elements/LogoutButton'


const Header = () => {

    const {login} = useAppSelector(state => state.userReducer.user)

    return <div className={styles.container}>
        {login || 'Имя пользователя'}
        <LogoutButton />
    </div>
}

export default Header