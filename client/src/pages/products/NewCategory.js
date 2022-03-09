import React, { useState } from 'react'
import NewCategoryTemplate from '../../components/templates/products/NewCategoryTemplate'
import { useNotification } from '../../hooks/useNotification'
import AxiosInstance from '../../utils/AxiosInstance'

const NewCategory = () => {
    const [form, setForm] = useState({name:''})
    const {handleMessage} = useNotification()

// Funciones 
    function handleForm(e){
        setForm({
            name:e.target.value,
        })
    }
    async function handleSubmit(e){
        e.preventDefault();
        let string = new URLSearchParams();
        string.append('name',`${form.name}`)
        try{
            let {data} = await AxiosInstance.post('category',string)
            if(data){
                handleMessage(data.ok,data.msg)
            }
            setForm({name:''})
        }catch(err){
            handleMessage(err.response.data.ok,err.response.data.msg)
            setForm({name:''})
        }
    }
  return (
    <NewCategoryTemplate
        form = {form}
        handleForm = {handleForm}
        handleSubmit={handleSubmit}
    />
  )
}

export default NewCategory