import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const LoginContainer = styled.form`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:1rem;
`

const LoginForm = ({handleSubmit,handleChange,error,email,password}) => {
  return (
    <LoginContainer onSubmit={handleSubmit}>
        <Input
        name='email'
        type='email'
        value={email}
        color={error ? 'danger' : 'primary'}
        width='100%'
        placeholder='Ingrese su Email'
        onChange={handleChange}
        />
        <Input
        name='password'
        type='password'
        value={password}
        color={error ? 'danger' : 'primary'}
        width='100%'
        placeholder='Password'
        onChange={handleChange}
        />
        <Button
        disabled={
            password && email && password.length > 2 && email.length > 2 ? '' : true
        }
        >
            Ingresar
        </Button>
    </LoginContainer>
  )
}

export default LoginForm