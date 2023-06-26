import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../../pages/AuthPage'
import MainPage from '../../pages/MainPage'
import { useAppSelector } from '../../state/hooks'


const Router = () => {

  const {login} = useAppSelector(state => state.userReducer.user)

  return <HashRouter>
    <Routes>
      {login && <Route path='/cards' Component={MainPage} />}
      {!login && <Route path='/login' Component={LoginPage} />}
      <Route path='*' element={<Navigate to={login? '/cards' : '/login'} />} />
    </Routes>
  </HashRouter>
}

export default Router