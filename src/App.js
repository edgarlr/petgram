import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './Components/Logo'
import { Home } from './pages/Home'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './Components/NavBar'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
