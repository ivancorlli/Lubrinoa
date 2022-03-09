import React from 'react';
import { IoCarSportOutline, IoChatbubblesOutline, IoConstructOutline, IoSpeedometerOutline, IoStorefrontOutline } from 'react-icons/io5';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import { BorderRadius, Devices, ZIndex } from '../GlobalStyle';
import IconContainer from '../atoms/IconContainer';

const SidebarContainer = styled.div`
    height:10vh ;
    width: 100%;
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;
    background-color:${({theme})=> theme.colors.primary};
    position:fixed;
    bottom:0;
    left:0;
    border-top-right-radius:${BorderRadius.lg};
    border-top-left-radius:${BorderRadius.lg};
    transition: all 0.25s ease;
    z-index:${ZIndex[50]};
    @media ${Devices.Laptops}{
        border-top-left-radius:0px;
        border-bottom-right-radius:${BorderRadius.lg};
        border-top-right-radius:${BorderRadius.lg};
        height:100vh ;
        width: 12vh;
        flex-direction:column;
        align-items:center;
        top:0;
        left:0;
    }
`

const Sidebar = () => {
  return (
        <SidebarContainer>
            <NavLink to='/' 
            style={({isActive})=> isActive ? { background:'#151A31',borderRadius:BorderRadius.md, padding:'.5rem'} : undefined}>
                <IconContainer color='fontLight' size='lg' >
                    <IoSpeedometerOutline/>
                </IconContainer>
            </NavLink>
            {/* ventas */}
            <NavLink to='/ventas' 
            style={({isActive})=> isActive ? { background:'#151A31',borderRadius:BorderRadius.md, padding:'.5rem'} : undefined}>
                <IconContainer color='fontLight' size='lg' >
                    <IoStorefrontOutline/>
                </IconContainer>
            </NavLink>
            <NavLink to='/productos' 
            style={({isActive})=> isActive ? { background:'#151A31',borderRadius:BorderRadius.md, padding:'.5rem'} : undefined}>
                <IconContainer color='fontLight' size='lg' >
                    <IoConstructOutline/>
                </IconContainer>
            </NavLink>
            <NavLink to='/clientes' 
            style={({isActive})=> isActive ? { background:'#151A31',borderRadius:BorderRadius.md, padding:'.5rem'} : undefined}>
                <IconContainer color='fontLight' size='lg' >
                    <IoCarSportOutline/>
                </IconContainer>
            </NavLink>
            <NavLink to='/mensajeria' 
            style={({isActive})=> isActive ? { background:'#151A31',borderRadius:BorderRadius.md, padding:'.5rem'} : undefined}>
                <IconContainer color='fontLight' size='lg' >
                    <IoChatbubblesOutline/>
                </IconContainer>
            </NavLink>
        </SidebarContainer>
  );
};

export default Sidebar;