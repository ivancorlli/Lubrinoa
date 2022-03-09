import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ActionButton from '../../atoms/ActionButton'
import IconContainer from '../../atoms/IconContainer'
import Input from '../../atoms/Input'
import InputSelect from '../../atoms/InputSelect'
import Stack from '../../atoms/Stack'
import Text from '../../atoms/Text'
import { BorderRadius } from '../../GlobalStyle'

const Container = styled.div`
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
const StyledTextArea = styled.textarea`
    outline:none;
    border:none ;
    background: ${({theme})=>theme.fontColor.light};
    padding: 0.75rem 1rem;
    border-radius:${BorderRadius.md};
    width:80% ;
`

const NewProductTemplate = ({
    form,
    handleForm,
    handleSubmit,
    options,
    category,
    handleSelect,
}) => {
    const navigate = useNavigate()

  return (
      !options || options.length === 0 ?
    <h2>Primero debe registrar una categoria</h2>
    :
    <Container>
        <Stack items='center' content='start' spacing={14}>
            <CustomButton onClick={()=> navigate('/productos')}>
                <IconContainer size='xl'>
                    <IoArrowBackSharp/>
                </IconContainer>
            </CustomButton>
            <Text size='h2' color='fontDark' weight='semibold'>
                Crear nuevo Producto
            </Text>
        </Stack>
        <Form onSubmit={handleSubmit}>
            <Input
            width='4/5'
            bg='fontLight'
            name='code'
            type='text'
            value={form?.code}
            placeholder='Codigo'
            onChange={handleForm}
            required
            />
            <InputSelect
            name='category'
            value={category}
            options={options}
            placeholder='Seleccione una categoria'
            onChange={handleSelect}
            width='82%'
            />
            <Input
            width='4/5'
            bg='fontLight'
            name='precio'
            type='number'
            value={form?.precio}
            placeholder='Precio'
            onChange={handleForm}
            required
            />
            <Input
            width='4/5'
            bg='fontLight'
            name='cantidad'
            type='text'
            value={form?.cantidad}
            placeholder='Cantidad'
            onChange={handleForm}
            />
            <StyledTextArea
            name='aplicacion'
            value={form?.aplicacion}
            placeholder='Aplicacion'
            onChange={handleForm}
            />  

                <ActionButton 
                color='light'
                disabled={form && form.code.length > 2 && form.categoria.length > 4 && form.precio.length > 2? '' : true}
                >
                    Guardar
                </ActionButton>
        </Form>
    </Container>
    
  )
}

export default NewProductTemplate