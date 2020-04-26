import React, { Fragment, useContext } from 'react'
import { UserForm } from '../Components/UserForm'
import { Context } from '../Context'
import { LoginMutation } from '../Containers/LoginMutation'
import { LoginLink } from '../Components/LoginLink'

export const Login = () => {
  const { activateAuth } = useContext(Context)
  return (
    <Fragment>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          const errorMsg =
            error && 'La contraseña no es correcta o el usuario no existe'
          return (
            <Fragment>
              <UserForm
                disabled={loading}
                error={errorMsg}
                title='Iniciar Sesión'
                onSubmit={onSubmit}
              />
              <LoginLink text='No' pathTo='signup'>
                Regístrate
              </LoginLink>
            </Fragment>
          )
        }}
      </LoginMutation>
    </Fragment>
  )
}
