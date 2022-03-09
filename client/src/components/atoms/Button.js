import React from 'react'
import styled from 'styled-components'
import { BorderRadius, Devices, Disabled, widthFunction } from '../GlobalStyle'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
    display:${({display})=> display ? 'none' : 'block'};
    padding:0.35rem 1rem;
    border-radius:${BorderRadius.md};
    border:none;
    background-color:${({theme})=> theme.colors.primary};
    color:${({theme,color})=> color === 'light' ? 'white' : theme.fontColor.dark};
    width: ${({ width }) => widthFunction(width)};
    ${({disabled})=> disabled ? Disabled : ''}
    font-weight:600;
    cursor: pointer;
    letter-spacing:.05rem;
    position: relative;
    transition: all 0.5s ease-in;
    &:hover{
      &::before {
        content: "";
        position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      border: none;
    }
  }
  @media ${Devices.Tablets}{
      display:${({displayT})=> displayT ? 'none' : 'block'};
    }
`


const Button = ({children,color='light',onClick,disabled,width,display,displayT}) => {
  return (
    <StyledButton
    color={color}
    onClick={onClick}
    disabled={disabled}
    width={width}
    display={display}
    displayT={displayT}
    >
        {children}
    </StyledButton>
  )
}

Button.propTypes={
  color:PropTypes.oneOf(['light','dark'])
}

export default Button