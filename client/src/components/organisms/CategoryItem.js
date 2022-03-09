import React from 'react'
import { IoEyeOutline, IoTrashOutline } from 'react-icons/io5'
import styled from 'styled-components'
import ActionButton from '../atoms/ActionButton'
import Button from '../atoms/Button'
import IconContainer from '../atoms/IconContainer'
import Text from '../atoms/Text'
import { BorderRadius, Devices } from '../GlobalStyle'

const Container = styled.div`
    display: flex;  
    width: 90%;
    align-items:center;
    justify-content:space-around;
    background: ${({theme})=>theme.fontColor.light};
    padding: .5rem;
    border-radius:${BorderRadius.md};
    margin: 0.25rem 0;
    @media ${Devices.Tablets}{
        width: 80%;
        justify-content:center;
        gap: 5rem;
    }
`
const Stack = styled.div`
    display: flex;
    flex-direction:column;
    gap:0.25rem;
    width:100% ;
    @media ${Devices.Laptops}{
        flex-direction:row;
        gap:1.5rem;
    }
    `
const StackButton = styled.div`
    display: flex;
    flex-direction:column;
    gap:1.5rem;
    @media ${Devices.Laptops}{
        flex-direction:row;
        gap:1.5rem;
    }
    `
const CustomButton = styled.button`
    border:none;
    background: transparent;
    @media ${Devices.Tablets}{
        display: none;
    }
    ` 

const CategoryItem = ({
    name,
    products,
    editar,
    eliminar,
}) => {
  return (
    <Container>
        <Stack>
            <Text
            align='start'
            color='fontDark'
            weight='bold'
            >{name}
            </Text>
            <Text
            align='start'
            color='fontDark'
            weight='normal'
            >{products} productos
            </Text>
        </Stack>
        <StackButton>
            <CustomButton onClick={editar}>
                <IconContainer>
                    <IoEyeOutline/>
                </IconContainer>
            </CustomButton>
            <CustomButton onClick={eliminar}>
                <IconContainer>
                    <IoTrashOutline/>
                </IconContainer>
            </CustomButton>
            <Button
            display='true'
            displayT={false}
            onClick={editar}
            >
                Editar
            </Button>
            <ActionButton
            type='danger'
            color='light'
            display='true'
            displayT={false}
            onClick={eliminar}>
                Eliminar
            </ActionButton>
        </StackButton>
    </Container>
  )
}

export default CategoryItem