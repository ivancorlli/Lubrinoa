import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ActionButton from '../../atoms/ActionButton'
import IconContainer from '../../atoms/IconContainer'
import InputSelect from '../../atoms/InputSelect'
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
    margin:2rem 0;
    width: 100%;
    gap:1rem;
`

const NewVehicleTemplate = ({
    form,
    handleForm,
    handleSubmit,
    options,
    owner,
    handleSelect,
}) => {
    const navigate = useNavigate()

  return (
      !options || options.length === 0 ?
    <h2>Primero debe registrar un cliente</h2>
    :
    <Container>
        <Stack items='center' content='start' spacing={14}>
            <CustomButton onClick={()=> navigate('/clientes/vehiculos')}>
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
            name='patent'
            type='text'
            value={form?.patent}
            placeholder='Patente'
            onChange={handleForm}
            required
            >
                Patente
            </InputText>
            <InputSelect
            name='owner'
            value={owner}
            options={options}
            placeholder='Seleccione un cliente'
            onChange={handleSelect}
            />
            <InputText
            bg='fontLight'
            name='mark'
            type='text'
            value={form?.mark}
            placeholder='Marca'
            onChange={handleForm}
            required
            >
                Marca
            </InputText>
            <InputText
            bg='fontLight'
            name='model'
            type='text'
            value={form?.model}
            placeholder='Modelo'
            onChange={handleForm}
            >
                Modelo
            </InputText>
            <InputText
            bg='fontLight'
            name='km'
            type='number'
            value={form?.km}
            placeholder='Km'
            onChange={handleForm}
            >
                Km
            </InputText>
            <InputText
            bg='fontLight'
            name='year'
            type='number'
            value={form?.year}
            placeholder='Anio'
            onChange={handleForm}
            >
                Anio
            </InputText>
                <ActionButton 
                color='light'
                disabled={form && form?.patent?.length > 2 && form?.mark?.length > 2 && form?.owner?.length > 4 ? '' : true}
                >
                    Guardar
                </ActionButton>
        </Form>
    </Container>
    
  )
}

export default NewVehicleTemplate