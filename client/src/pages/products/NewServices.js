import React from 'react'
import NewServicesTemplate from '../../components/templates/products/NewServicesTemplate'
import { useForm } from "react-hook-form";

const NewServices = () => {
  const { register, handleSubmit } = useForm();
  return (
    <NewServicesTemplate
    register={register}
    handleSubmit={handleSubmit}
    />
  )
}

export default NewServices