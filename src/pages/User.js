import React, { useContext, Fragment } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../Components/SubmitButton'
import { Layout } from '../Components/Layout'
import { ThemeSwitch } from '../Components/ThemeSwitch'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Usuario'>
      <Fragment>
        <ThemeSwitch />
        <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
      </Fragment>
    </Layout>
  )
}
