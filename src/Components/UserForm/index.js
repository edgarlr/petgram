import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error, Label, Div } from './styles'
import { SubmitButton } from '../SubmitButton'
import { Logo } from '../../Components/Logo'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Div>
      <Logo size='250px' margin='5vh auto -80px' />
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Label htmlFor='email'>Email</Label>
        <Input name='email' disabled={disabled} placeholder='Email' {...email} />
        <Label htmlFor='password'>Contraseña</Label>
        <Input
          name='password'
          placeholder='Password'
          type='password'
          disabled={disabled}
          {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Div>
  )
}
