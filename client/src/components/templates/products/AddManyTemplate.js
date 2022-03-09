import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ActionButton from '../../atoms/ActionButton'
import IconContainer from '../../atoms/IconContainer'
import { InputFile } from '../../atoms/InputFile'
import Stack from '../../atoms/Stack'
import Text from '../../atoms/Text'

const Container = styled.div`
    display: flex;
    flex-direction:column;
    gap:3rem;
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
    gap:2.5rem;
`

const ResponseContainer = styled.div`
    display:flex ;
    flex-direction:column;
    wrap:wrap;
    align-items:center;
`
const Products = styled.div`
    display:flex ;
    flex-direction:column;
    wrap:wrap;
`

const AddManyTemplate = ({
    handleForm,
    handleSubmit,
    existingProducts,
    categoryError,
    message,
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
                Crear varios productos
            </Text>
        </Stack>
                <Form onSubmit={handleSubmit} >
                    <Text
                    color='fontDark'
                    size='h4'
                    >
                        Es neceseario subir un archivo excel.
                    </Text>
                    <InputFile
                    name='excel'
                    
                    onChange={handleForm}
                    />

                        <ActionButton 
                        type='warning'
                        color='dark'
                        >
                            Enviar
                        </ActionButton>
                </Form>
                <ResponseMessage
                message={message}
                existingProducts={existingProducts}
                categoryError={categoryError}
                />
    </Container>
    
  )
}

export default AddManyTemplate


function ResponseMessage({
    message,
    existingProducts,
    categoryError
}){
    return(
        <ResponseContainer>
            {
                message &&(
                    <Stack direction='column' items='start' content='center'>
                        <Text
                        color='fontDark'
                        weight='bold'
                        >
                            {message.newProducts}
                        </Text>
                        <Text
                        color='fontDark'
                        weight='bold'
                        >
                            {message.existingProducts}
                        </Text>
                        <Text
                        color='fontDark'
                        weight='bold'
                        >
                            {message.categoryErrors}
                        </Text>
                        <Text
                        color='fontDark'
                        weight='bold'
                        >
                            {message.totalCreated}
                        </Text>
                    </Stack>
                )

            }
            <Products>

            {
                existingProducts && existingProducts.length > 0 &&(
                    
                    existingProducts.map(el=>{
                        return<Text key={el} color='fontDark'>{el}</Text>
                    })
                    
                    )
                }
            </Products>
            {/* <Products>

            {
                categoryError && categoryError.length > 0 &&(
                    
                    categoryError.map(el=>{
                        return<Text key={el} color='fontDark'>{el}</Text>
                    })
                    
                    )
                }
            </Products> */}
        </ResponseContainer>
    )
}