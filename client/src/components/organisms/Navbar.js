import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IoLogOut, IoPerson } from 'react-icons/io5'
import { IoMdSettings } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import IconContainer from '../atoms/IconContainer'
import Stack from '../atoms/Stack'
import Text from '../atoms/Text'
import Menu, { MenuItem } from './Menu'

const Container = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    `
  const ContainerChild = styled.div`
  display: flex;
  flex-direction:column;
  align-items:start;
  justify-content:start;
`

const Navbar = ({logOut}) => {
  const Location = useLocation();
  const [path, setPath] = useState('')

  useEffect(() => {
    function getPath(){
        if(Location.pathname === '/'){
            setPath('/inicio')
        }else{
            setPath('/'+Location.pathname.split('/')[1])
        }
    }
        getPath()
        return () => {
            
        }
    }, [Location])
  return (
    <Container>
        <Text
        color='fontDark'
        size='h1'
        weight='bold'
        >
            {path}
        </Text>
        <Menu top='50px' left='80%'>
          <NavbarItems logOut={logOut}/>
        </Menu>
    </Container>
  )
}

export default Navbar

function NavbarItems ({logOut}){
  const navigate = useNavigate();

  return(
    <ContainerChild>
      <MenuItem onClick={()=>navigate('/config')}>
          <Stack items='center' content='start'>
            <IconContainer>
              <IoPerson/>
            </IconContainer>
            <Text
            color='fontDark'
            weight='semibold'
            >
              Mi Perfil
            </Text>
          </Stack>
      </MenuItem>
      <MenuItem onClick={()=>navigate('/config')}>
          <Stack items='center' content='start'>
            <IconContainer>
              <IoMdSettings/>
            </IconContainer>
            <Text
            color='fontDark'
            weight='semibold'
            >
              Configuracion
            </Text>
          </Stack>
      </MenuItem>
      <MenuItem onClick={()=>logOut()}>
          <Stack items='center' content='start'>
            <IconContainer>
              <IoLogOut/>
            </IconContainer>
            <Text
            color='fontDark'
            weight='semibold'
            >
              Cerrar Sesion
            </Text>
          </Stack>
      </MenuItem>
    </ContainerChild>
  )
}