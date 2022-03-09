import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { BorderRadius, widthFunction } from '../GlobalStyle';
import { colorsFunction } from '../Theme';

const InputStyled = styled.input`
    outline:none;
    background: ${({theme,bg})=>bg ?colorsFunction(bg,theme) : `transparent`};
    padding: 0.75rem 1rem;
    border-radius:${BorderRadius.md};
    border:${({theme,color})=>color ? `1.5px solid ${colorsFunction(color,theme)}` : `none`};
    width: ${({ width }) => widthFunction(width)};
`

const Input = ({id,type, name,value,placeholder='Texto de ejemplo',onChange,required,color,width='1/5', pattern,title,onFocus,ref,bg}) => {
  return <InputStyled id={id} name={name} value={value} type={type} color={color} placeholder={placeholder} required={required} onChange={onChange} width={width} pattern={pattern} title={title} onFocus={onFocus} ref={ref} bg={bg}/>;
};

Input.propTypes ={
    id:PropTypes.string,
    pattern:PropTypes.string,
    title:PropTypes.string,
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    width:PropTypes.oneOf(['xs','md','lg','1/4','1/5','2/4','2/5','3/4','3/5','4/5','100%']),
    color:PropTypes.oneOf(['primary','secondary','fontLight','fontDark','fontMedium','success','warning','danger']),
    required:PropTypes.bool,
    onChange:PropTypes.func,
};

export default Input;