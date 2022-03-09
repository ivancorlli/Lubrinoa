import React from 'react'
import styled from 'styled-components'
import Wave from '../assets/Wave.svg'
import LoginImage from '../assets/Recuperar.svg'
import {BorderRadius, Devices} from '../GlobalStyle'
import Text from '../atoms/Text'
import { Link } from 'react-router-dom'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const LoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-image:${`url(${Wave})`};
    background-size:cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    `

const Container = styled.div`
    background: white;
    height: max-content;
    width: 80%;
    border-radius:${BorderRadius.md};
    box-shadow:1px 1px 20px ${({theme})=> theme.fontColor.medium};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    gap:2rem;
    padding: 1rem;
    @media ${Devices.Tablets}{
        height: 50%;
        width: 50%;
        flex-direction:row;
    }
    `

const StyledImage = styled.img`
    display: none;
    max-width: 100%;
    max-height: 95%;
    @media ${Devices.Tablets}{
        display:block;
    }
`
const LoginContainerForm = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;

`
const StyledLink = styled(Link)`
    font-size:0.75rem;
    text-align:end;
    text-decoration:none;
    color: ${({theme})=> theme.fontColor.medium};
    &:hover{
        color: ${({theme})=> theme.fontColor.dark};
    }
`

const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap: 1rem;
`

const RecuperarTemplate = ({handleSubmit,handleChange,form}) => {
  return (
    <LoginContainer>
        <Container>
            <StyledImage src={LoginImage} alt='Login image'/>
            <LoginContainerForm>
                <Text
                color='fontDark'
                weight='extrabold'
                size='h1'
                >
                    Recuperar
                </Text>
                <Text
                color='fontDark'
                weight='light'
                size='h5'
                >
                Ingrese su correo electronico y se le enviaran instrucciones para recuperar su cuenta.
                </Text>
                    <Form onSubmit={handleSubmit}>
                        <Input
                        name='email'
                        type='email'
                        value={form?.email}
                        placeholder='Ingrese su email'
                        width='4/5'
                        color='primary'
                        onChange={handleChange}
                        />
                        <Button
                        disabled={
                            form && form?.email.length > 2 ? '' :false
                        }
                        >
                            Recuperar
                        </Button>
                    </Form>
                <StyledLink
                to='/login'
                >Ya tenes cuenta ?</StyledLink>
            </LoginContainerForm>
        </Container>
    </LoginContainer>
  )
}

export default RecuperarTemplate