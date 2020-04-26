import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title } from './styles'
import { Header } from '../Header'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Header><Title>{title}</Title></Header>}
        {children}
      </Div>
    </Fragment>
  )
}
