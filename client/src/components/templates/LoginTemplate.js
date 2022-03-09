import React from 'react'
import styled from 'styled-components'
import Wave from '../assets/Wave.svg'
import LoginImage from '../assets/LoginImage.svg'
import {BorderRadius, Devices} from '../GlobalStyle'
import LoginForm from '../organisms/LoginForm'
import Text from '../atoms/Text'
import { Link } from 'react-router-dom'

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
    height: 50%;
    width: 80%;
    border-radius:${BorderRadius.md};
    box-shadow:1px 1px 20px ${({theme})=> theme.fontColor.medium};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    gap:2rem;
    @media ${Devices.Tablets}{
        height: 65%;
        width: 75%;
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
    gap:2rem;
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

const LoginTemplate = ({handleSubmit,handleChange,form,error}) => {
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
                    Login
                </Text>
                <LoginForm
                error={error}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                email={form?.email}
                password={form?.password}
                />
                <StyledLink
                to='/recuperar'
                >Olvidaste tu contrasenia ?</StyledLink>
            </LoginContainerForm>
        </Container>
    </LoginContainer>
  )
}

export default LoginTemplate