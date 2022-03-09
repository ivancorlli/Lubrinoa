import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ActionButton from '../../atoms/ActionButton'
import IconContainer from '../../atoms/IconContainer'
import Input from '../../atoms/Input'
import Stack from '../../atoms/Stack'
import Text from '../../atoms/Text'

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
const EditCategoryTemplate = ({
    form,
    handleForm,
    handleSubmit,
}) => {
    const navigate = useNavigate()

  return (
    <Container>
        <Stack items='center' content='start' spacing={14}>
            <CustomButton onClick={()=> navigate('/productos/categorias')}>
                <IconContainer size='xl'>
                    <IoArrowBackSharp/>
                </IconContainer>
            </CustomButton>
            <Text size='h2' color='fontDark' weight='semibold'>
                Actualizar categoria
            </Text>
        </Stack>
        <Form onSubmit={handleSubmit}>
    
            <Input
            width='4/5'
            bg='fontLight'
            name='name'
            type='text'
            value={form?.name}
            placeholder='Nombre de la categoria'
            onChange={handleForm}
            />

                <ActionButton 
                color='light'
                disabled={form && form.name.length > 2 ? '' : true}
                >
                    Guardar
                </ActionButton>
        </Form>
    </Container>
    
  )
}

export default EditCategoryTemplate