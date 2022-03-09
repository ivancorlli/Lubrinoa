import React from 'react'
import styled from 'styled-components'
import Wave from '../assets/Wave.svg'
import LoginImage from '../assets/Recuperar.svg'
import {BorderRadius, Devices} from '../GlobalStyle'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import InputText from '../molecules/InputText'

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

const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap: 1rem;
`

const NewPassTemplate = ({handleSubmit,handleChange,form}) => {
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
                    Nueva Contrasenia
                </Text>
                    <Form onSubmit={handleSubmit}>
                        <InputText
                        name='passowrd'
                        type='password'
                        value={form?.password}
                        placeholder='Nueva Contrasenia'
                        color='primary'
                        onChange={handleChange}
                        >Nueva Contrasenia</InputText>
                        <InputText
                        name='repeatedPassowrd'
                        type='password'
                        value={form?.repeatedPassword}
                        placeholder='Repetir Contrasenia'
                        color='primary'
                        onChange={handleChange}
                        >Repetir Contrasenia</InputText>
                        <Button
                        disabled={
                            form && form?.email.length > 2 ? '' :false
                        }
                        >
                            Guardar
                        </Button>
                    </Form>
            </LoginContainerForm>
        </Container>
    </LoginContainer>
  )
}

export default NewPassTemplate