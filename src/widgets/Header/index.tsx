import styles from './lib/styles.module.css'
import { useAppSelector } from '../../state/hooks'
import LogoutButton from './elements/LogoutButton'


const Header = () => {

    const {email} = useAppSelector(state => state.userReducer.user)

    return <div className={styles.container}>
        {email || 'Имя пользователя'}
        <LogoutButton />
    </div>
}

export default Header