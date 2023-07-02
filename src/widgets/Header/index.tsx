import styles from './lib/styles.module.css'
import { useAppSelector } from '../../state/hooks'
import LogoutButton from './elements/LogoutButton'
import Spinner from '../../ui/Spinner'


const Header = () => {

    const {email} = useAppSelector(state => state.userReducer.user)

    return <div className={styles.container}>
        <span>{email || <Spinner />}</span>
        <LogoutButton />
    </div>
}

export default Header