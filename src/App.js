import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { User } from './pages/User'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './Components/NavBar'
import { Context } from './Context'
import { InstallAppLink } from './Components/IntallAppLink'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        <Login path='/login' />
        {!isAuth && <NotRegisteredUser path='/signup' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/signup' />}
        {!isAuth && <Redirect noThrow from='/user' to='/signup' />}
        {isAuth && <Redirect from='/signup' to='/' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <InstallAppLink />
      <NavBar />
    </Suspense>
  )
}
