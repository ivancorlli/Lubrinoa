import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    font-size:1rem;
    font-weight:bold;
    background:white ;
    border-radius:8px ;
    box-shadow:5px 5px 10px ${({theme})=> theme.fontColor.medium};
    width:250px ;
    outline:none;
    ::-webkit-file-upload-button{
        color:white ;
        background:${({theme})=> theme.colors.primary};
        padding:0.75rem ;
        border:none ;
        outline:none ;
    }
`
export const InputFile = ({
    name,
    value,
    placeholder='Subir Archivo',
    onChange,

}) => {
  return (
        <Input 
        type='file'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        />
  )
}
