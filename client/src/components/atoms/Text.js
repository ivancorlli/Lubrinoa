import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontWeight } from '../GlobalStyle';
import { colorsFunction } from '../Theme';


const StyledText = styled.span`
    margin: 0;
    padding:0;
    text-align:${({align})=>{
        switch(align){
            case 'start':
                return align='start'
            case 'center':
                return align='center'
                case 'end':
              return align='end'
            default:
                return align='none'
        }
    }};
    text-decoration:${({underline})=> underline ? 'underline': 'none' };
    font-size:${({size})=>{
        switch(size){
            case 'h1':
                return size='2rem'
            case 'h2':
                return size='1.5rem'
            case 'h3':
                return size='1.125rem'
            case 'h4':
                return size='1rem'
            case 'h5':
                return size='0.75rem'
            default:
                return size='none'
        }
    }} ;
    font-weight:${({weight})=>{
      switch(weight){
        case 'thin':
          return weight = FontWeight.thin;
        case 'extralight':
          return weight = FontWeight.extralight;
        case 'light':
          return weight = FontWeight.light;
        case 'normal':
          return weight = FontWeight.normal;
        case 'semibold':
          return weight = FontWeight.semibold;
        case 'bold':
          return weight = FontWeight.bold;
        case 'extrabold':
          return weight = FontWeight.extrabold;
        default :
        return weight = 'none';
      }
    }};
    color: ${({color,theme})=> colorsFunction(color,theme)};
`

const Text = ({children, size='h4',color='primary' , weight='normal' ,underline, align='center'}) => {
  return <StyledText align={align} size={size} color={color} weight={weight} underline={underline}>{children}</StyledText>;
};

Text.propTypes={
    weight:PropTypes.oneOf(['thin','extralight','light','normal','semibold','bold','extrabold']),
    size:PropTypes.oneOf(['h1','h2','h3','h4','h5']),
    color:PropTypes.oneOf(['primary','secondary','bgPrimary','bgSecondary','fontLight','fontDark','fontMedium','success','warning','danger']),
    unerline:PropTypes.bool
}

export default Text;