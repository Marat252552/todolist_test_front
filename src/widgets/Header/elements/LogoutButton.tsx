import { Button } from '@mui/material'
import {useState} from 'react'
import logoutAPI from '../../../shared/api/actions/logoutAPI'
import { useAppDispatch } from '../../../state/hooks'
import userSlice from '../../../state/Reducers/UserReducer'
import Spinner from '../../../ui/Spinner'

const LogoutButton = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()
    const { resetUserState } = userSlice.actions

    const logout = async () => {
        setLoading(true)
        try {
            await logoutAPI()
            dispatch(resetUserState())
            localStorage.removeItem('access_token')
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return <>
        {
            loading?
            <Spinner />
            :
            <Button onClick={logout} variant='contained'>Выйти</Button>
        }
    </>
    
}


export default LogoutButton