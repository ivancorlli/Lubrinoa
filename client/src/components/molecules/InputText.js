import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const Container = styled.div`
    width:100% ;
    display: flex;
    flex-direction:column;
    align-items:center;
    gap:0.25rem;'
`;

const InputText = ({
  id,
  type,
  name,
  value,
  placeholder = "Texto de ejemplo",
  onChange,
  required,
  color,
  width='100%',
  pattern,
  title,
  onFocus,
  ref,
  children,
  bg
}) => {
  return (
    <Container>
      <Text
      weight="thin"
      color="fontDark"
      size="h5"
      >
        {children}    
      </Text>  
      <Input
        InputStyled
        id={id}
        name={name}
        value={value}
        type={type}
        color={color}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        width={width}
        pattern={pattern}
        title={title}
        onFocus={onFocus}
        ref={ref}
        bg={bg}
      />
    </Container>
  );
};

export default InputText;
