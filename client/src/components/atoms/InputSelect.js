import React from 'react'
import Select from 'react-select'


const InputSelect = ({
  value,
  placeholder='Selecione una opcion',
  options=[
          {
          value:'ivan',
          label:'Ivan'
          },
          {
          value:'juan',
          label:'Juan'
          }
          ],
  onChange,
  name,
  width,

}) => {

  const styles = {
    control: (provided, state) => ({
      ...provided,
      border:'none',
      borderRadius:'8px',
      height:'2px',
      background:'#E5E5E5',
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "white",
    }),
    container:(provided) =>({
      ...provided,
      width:width
    }),
  };


  return (
    <Select
    name={name}
    value={value}
    styles={styles}
    placeholder={placeholder}
    options={options}
    onChange={onChange}
    width={width}
    />
  )
}

export default InputSelect