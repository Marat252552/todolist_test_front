import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from '../../pages/AuthPage'
import MainPage from '../../pages/MainPage'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import RestorePasswordPage from '../../pages/RestorePasswordPage'
import SetNewPasswordPage from '../../pages/SetNewPasswordPage'
import userSlice from '../../state/Reducers/UserReducer'


const Router = () => {

  const { isAuthorized } = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()
  const { setIsAuthorized } = userSlice.actions

  if (localStorage.getItem('access_token')) {
    console.log('wadopawkl')
    dispatch(setIsAuthorized(true))
  }

  return <HashRouter>
    <Routes>
      {isAuthorized && <Route path='/cards' Component={MainPage} />}
      <Route path='/restore' Component={RestorePasswordPage} />
      {!isAuthorized && <Route path='/auth' Component={AuthPage} />}
      <Route path='/new_password/:key' Component={SetNewPasswordPage} />
      <Route path='*' element={<Navigate to={isAuthorized ? '/cards' : '/auth'} />} />
    </Routes>
  </HashRouter>
}

export default Router