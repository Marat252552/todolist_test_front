import { useEffect } from 'react'
import loggedAPI from '../../shared/api/actions/loggedAPI'
import userSlice from '../../state/Reducers/UserReducer'
import { useAppDispatch } from '../../state/hooks'


const LoggedChecker = ({ children }: { children: any }) => {

    const dispatch = useAppDispatch()
    const { setUser } = userSlice.actions

    let loggedCheck = async () => {
        try {
            let { data } = await loggedAPI()
            dispatch(setUser(data.user.email))
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        loggedCheck()
    }, [])
    
    return children
}

export default LoggedChecker
