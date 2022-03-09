import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Devices } from '../GlobalStyle'
import Navbar from '../organisms/Navbar'
import Sidebar from '../organisms/Sidebar'

const Container = styled.div`
    display: flex;
    flex-direction:column;
    @media ${Devices.Laptops}{
        flex-direction:row;
    }
`
const ChildContainer = styled.div`
    margin:0.25rem;
    padding-bottom:10vh;
    @media ${Devices.Laptops}{
        width: 100%;
        padding-left:13vh;
    }
    `
const OutletContainer =styled.div`
    display: flex;
    flex-direction:column;
    margin: 0 .75rem;
    gap:1.5rem;
    @media ${Devices.Tablets}{
        margin:0 0.75rem;
    }
    @media ${Devices.Laptops}{
        margin:0 1.25rem;
    }
    @media ${Devices.Large}{
        margin:0 5rem;
    }
`


const DashboardTemplate = ({logOut}) => {
  return (
    <Container>
        <Sidebar/>
        <ChildContainer>
            <Navbar logOut={logOut}/>
            <OutletContainer>
                <Outlet/>
            </OutletContainer>
        </ChildContainer>
    </Container>
  )
}

export default DashboardTemplate


