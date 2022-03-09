import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BorderRadius, Devices, ZIndex } from '../GlobalStyle'

const Container = styled.div`
    position:sticky ;
    top:0;

    background: white;
    display: flex;
    flex-direction:row;
    justify-content:center;
    padding: 0.75rem 0 ;
    gap:1rem;
    z-index:${ZIndex[40]};
    @media ${Devices.Tablets}{
        justify-content:start;
    }
`

const InternNavbar = ({items}) => {
    const Active ={
        background:'#4B59F7',
        borderRadius:BorderRadius.md,
        padding:'0.25rem 0.5rem',
        color:'#F4F7FB',
        fontWeight:'bold',
        fontSize:'14px',
        textDecoration:'none',
        boxShadow:`1px 1px 5px #A9B3C1`
    }
    const Disabled ={
        background:'#A9B3C1',
        borderRadius:BorderRadius.md,
        padding:'0.25rem 0.5rem',
        color:'#151A31',
        fontWeight:'bold',
        fontSize:'14px',
        textDecoration:'none',
        boxShadow:`1px 1px 5px #A9B3C1`
    }
  return (
    <Container>
        {
            items &&(
                items.map(el=>{
                    return(
                        <NavLink key={el.name} to={el.page}
                        style={({isActive})=> isActive ? Active : Disabled}>
                                {el.name}
                        </NavLink>
                    )
                })
            )
        }

    </Container>
  )
}

export default InternNavbar