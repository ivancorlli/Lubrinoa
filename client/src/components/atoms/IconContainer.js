import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { colorsFunction } from '../Theme';

const Container = styled.div`
    display:flex;
    align-items:center;
    font-size:${({size})=>{
        switch(size){
            case 'sm':
            return size = '1.5rem';
            case 'md' :
            return size = '1.75rem';
            case 'lg' :
            return size = '2rem'
            case 'xl' :
            return size = '2.25rem'
            default:
            return size = 'none'
        }
    }};
    color:${({theme,color})=> color ? colorsFunction(color,theme) : 'none'};
    cursor: pointer;

`

const IconContainer = ({children,color='fontDark',size='sm'}) => {
  return <Container color={color} size={size}>{children}</Container>;
};

IconContainer.propTypes ={
    size:PropTypes.oneOf(['sm','md','lg','xl']),
    color:PropTypes.oneOf(['primary','secondary','bgPrimary','bgSecondary','fontLight','fontDark','success','warning','danger']),
}

export default IconContainer;