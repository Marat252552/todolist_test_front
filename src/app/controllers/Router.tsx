import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../../pages/AuthPage'
import MainPage from '../../pages/MainPage'
import { useAppSelector } from '../../state/hooks'
import RestorePasswordPage from '../../pages/RestorePasswordPage'
import SetNewPasswordPage from '../../pages/SetNewPasswordPage'


const Router = () => {

  const {email} = useAppSelector(state => state.userReducer.user)

  return <HashRouter>
    <Routes>
      {email && <Route path='/cards' Component={MainPage} />}
      <Route path='/restore' Component={RestorePasswordPage} />
      {!email && <Route path='/login' Component={LoginPage} />}
      <Route path='/set_new_password/:key' Component={SetNewPasswordPage}/>
      <Route path='*' element={<Navigate to={email? '/cards' : '/login'} />} />
    </Routes>
  </HashRouter>
}

export default Router