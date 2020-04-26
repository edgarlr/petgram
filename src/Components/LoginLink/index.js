import React from 'react'
import { Div, Link, Text } from './styles'

export const LoginLink = ({ children, pathTo, text }) => {
  return (
    <Div>
      <Text>¿{text} tienes cuenta?</Text>
      <Link to={`/${pathTo}`}>
        {children}
      </Link>
    </Div>
  )
}
