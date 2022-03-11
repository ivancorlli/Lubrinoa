import React, { useState } from 'react'
import AddManyTemplate from '../../components/templates/products/AddManyTemplate'
import { useNotification } from '../../hooks/useNotification'
import AxiosInstance from '../../utils/AxiosInstance'

const initialMessage ={
    newProducts:'',
    existingProducts:'',
    categoryErrors:'',
    totalCreated:'',
}

const AddMany = () => {
    const [form, setForm] = useState({excel:null})
    const  [isLoading, setIsLoading] = useState(false)
    const [categoryError, setCategoryError] = useState([]);
    const [existingProducts, setExistingProduct] = useState([]);
    const [message, setMessage] = useState(initialMessage);
    const {handleMessage} = useNotification();
//Funciones 
    function handleForm(e){
        setForm({
            excel:e.target.files[0],
        })
    }
    async function handleSubmit(e){
        e.preventDefault();
        let formData = new FormData();
        formData.append('excel',form.excel)
        try{
            setIsLoading(()=>true)
            let {data} = await AxiosInstance.post('products',formData)
            if(data){
                setMessage({
                    newProducts:data.msg[1],
                    existingProducts:data.msg[2],
                    categoryErrors:data.msg[3],
                    totalCreated:data.msg[4],
                })
                setCategoryError(data.categoryErrors)
                setExistingProduct(data.existingProducts)
            }
            setIsLoading(()=>false)
        }catch(err){
            handleMessage(err?.response?.data?.ok,err?.response?.data?.msg)

        }
        setForm({excel:''})
    }
  return (
    <AddManyTemplate
    
    form={form}
    handleForm={handleForm}
    handleSubmit={handleSubmit}
    message={message}
    isLoading={isLoading}
    existingProducts={existingProducts}
    categoryError={categoryError}
    />
  )
}

export default AddMany