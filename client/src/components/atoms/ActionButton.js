import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { BorderRadius, Devices, Disabled} from '../GlobalStyle';

const ButtonStyled = styled.button`
  position:relative;
  display:${({display})=> display ? 'none' : 'block'};
  padding: 0.5rem 1rem ;
  border-radius:${BorderRadius.md};
  border: none;
  cursor:pointer;
  font-weight:600;
  letter-spacing:1px;
  color:${({theme})=>theme.fontColor.primary};
  width:${({width})=>width ? width : 'none'};
  ${({disabled})=> disabled ? Disabled : ''}
  color:${({theme,color})=> color === 'light' ? 'white' : theme.fontColor.dark};
  background-color :${({type,theme})=>{
      switch(type){
          case 'warning':
              return type = theme.action.warning;
          case 'danger':
              return type = theme.action.danger;
          case 'success':
              return type = theme.action.success;
        default :
        return type = '';
      }
  }};
   &:hover{
      &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      border: none;
      }
    }

    @media ${Devices.Tablets}{
      display:${({displayT})=> displayT ? 'none' : 'block'};
    }
`

const ActionButton = ({children, type='success', onClick,disabled,color='dark',display,displayT,width}) => {
  return <ButtonStyled type={type} onClick={onClick} disabled={disabled} color={color} display={display} displayT={displayT} width={width}>{children}</ButtonStyled>;
};

ActionButton.propTypes = {
    type:PropTypes.oneOf(['success','warning','danger']),
}
export default ActionButton;
