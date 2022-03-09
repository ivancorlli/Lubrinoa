import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ActionButton from '../../atoms/ActionButton'
import IconContainer from '../../atoms/IconContainer'
import Stack from '../../atoms/Stack'
import Text from '../../atoms/Text'
import InputText from '../../molecules/InputText'

const Container = styled.div`
    width: 100%;
    
`

const CustomButton = styled.button`
    border: none;
    background: transparent;
`

const Form = styled.form`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:5rem 0;
    width: 100%;
    gap:1rem;
`

const NewClientTemplate = ({
    form,
    handleForm,
    handleSubmit,
}) => {

    const navigate = useNavigate()


  return (
    <Container>
        <Stack items='center' content='start' spacing={14}>
            <CustomButton onClick={()=> navigate('/clientes')}>
                <IconContainer size='xl'>
                    <IoArrowBackSharp/>
                </IconContainer>
            </CustomButton>
            <Text size='h2' color='fontDark' weight='semibold'>
                Crear nuevo cliente
            </Text>
        </Stack>
        <Form onSubmit={handleSubmit}>
            <InputText
            bg='fontLight'
            name='name'
            type='text'
            value={form?.name}
            placeholder='Nombre del cliente'
            onChange={handleForm}
            required
            >
                Nombre
            </InputText>
            <InputText
            bg='fontLight'
            name='surname'
            type='text'
            value={form?.surname}
            placeholder='Apellido del cliente'
            onChange={handleForm}
            required
            >
                Apellido
            </InputText>
            <InputText
            bg='fontLight'
            name='phone'
            type='text'
            value={form?.phone}
            placeholder='Numero de telefono'
            onChange={handleForm}
            >
                Telefono
            </InputText>
            <InputText
            bg='fontLight'
            name='email'
            type='text'
            value={form?.email}
            placeholder='Correo Electronico'
            onChange={handleForm}
            >
                Email
            </InputText>
                <ActionButton 
                color='light'
                disabled={form && form.name.length > 2 && form.surname.length > 2 ? '' : true}
                >
                    Guardar
                </ActionButton>
        </Form>
    </Container>
  )
}

export default NewClientTemplate