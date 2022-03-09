import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import styled from 'styled-components'
import IconContainer from '../../atoms/IconContainer'
import Stack from '../../atoms/Stack'
import Text from '../../atoms/Text'


const CustomButton = styled.button`
    border: none;
    background: transparent;
`

const ClientProfileTemplate = ({client,navigate}) => {

  return (
    <>
        <Stack items='center' content='start' spacing={14}>
            <CustomButton onClick={()=> navigate('/clientes')}>
                <IconContainer size='xl'>
                    <IoArrowBackSharp/>
                </IconContainer>
            </CustomButton>
            <Text size='h2' color='fontDark' weight='semibold'>
                Informacion del cliente
            </Text>
        </Stack>

        <Stack direction='column' content='start'>
            <Text
            align='start'
            color='fontDark'
            weight='bold'
            >{client?.name} {client?.surname}
            </Text>
            <Text
            align='start'
            color='fontDark'
            weight='normal'
            >{client?.email}
            </Text>
            <Text
            align='start'
            color='fontDark'
            weight='normal'
            >{client?.phone}
            </Text>
            <Text
            align='start'
            color='fontDark'
            weight='normal'
            >{client?.vehicles.length} {client?.vehicles.length> 1 ? 'vehiculos' : 'vehiculo'}
            </Text>
        </Stack>
    </>
  )
}

export default ClientProfileTemplate