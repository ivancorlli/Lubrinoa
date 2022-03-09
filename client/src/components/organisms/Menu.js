import React, { useEffect, useRef, useState } from 'react'
import { IoClose, IoEllipsisVerticalOutline, IoMenu } from 'react-icons/io5'
import styled from 'styled-components'
import IconContainer from '../atoms/IconContainer'
import { BorderRadius, Devices, ZIndex } from '../GlobalStyle'

const Container = styled.div`
    display:${({open})=>open === false ? 'none' : 'block'} ;
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    background:rgba(0,0,0,.8);
    z-index:${ZIndex[50]};
    @media ${Devices.Tablets}{
        background: transparent;
    }
    `
const BodyContainer = styled.div`
    position:absolute;
    bottom: 0;
    width:100%;
    height: max-content;
    background: white;
    border-top-left-radius:${BorderRadius.lg};
    border-top-right-radius:${BorderRadius.lg};
    padding: 1.25rem 0;
    @media ${Devices.Tablets}{
        width:250px ;
        border-radius:${BorderRadius.md};
        box-shadow:1px 1px 15px ${({theme})=> theme.fontColor.medium};
        top:${({top})=> top ? top : '0'};
        left:${({left})=> left ? left : '0'};
    }
`

const CustomButton = styled.button`
    border: none;
    background: transparent;
`

export const MenuItem = styled.button`
    width:100% ;
    padding:0.5rem 1.5rem;
    height: max-content;
    border: none;
    background: transparent;
    cursor:pointer;
    &:hover{
        background: ${({theme})=> theme.fontColor.medium};
    }

`

const Menu = ({children,options,top,left}) => {
    const [open, setOpen] = useState(false)
    let MenuRef = useRef();

    useEffect(() => { 
        let handler= (e)=> {
            if(!MenuRef.current.contains(e.target)){
                setOpen(false);
            }
        }
        if(open){
            document.addEventListener('mousedown',handler);
        }
        return () => {
            document.removeEventListener('mousedown',handler);
        }
    }, [open])

  return (
      <>
          {
            !open ?
            <CustomButton onClick={()=> setOpen(!open)}>
                <IconContainer size='lg'>
                    {
                        options 
                        ?
                        <IoEllipsisVerticalOutline/>
                        :
                        <IoMenu/>
                    }
                </IconContainer>
            </CustomButton>
                :
            <CustomButton onClick={()=> setOpen(!open)}>
                <IconContainer size='lg'>
                    <IoClose/>
                </IconContainer>
            </CustomButton>
          }
      {
          open &&(
            <Container>
                <BodyContainer   
                top={top} left={left}
                ref={MenuRef}>
                        {children}
                </BodyContainer>
            </Container>
          )
      }
      </>
  )
}

export default Menu
