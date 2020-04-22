import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input
          placeholder='Password'
          type='password'
          disabled={disabled}
          {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}
