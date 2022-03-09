import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import EditCategoryTemplate from '../../components/templates/products/EditCategoryTemplate'
import AxiosInstance from '../../utils/AxiosInstance'

const EditCategory = () => {
    const [form, setForm] = useState({name:''})
    let data = useLocation();

    useEffect(()=>{

        async function getCategoryData(categoryId){
            let {data} = await AxiosInstance.get(`category/${categoryId}`)
            if(data){
                let response = data.response
                console.log(response)
            }
          }
    
        let id = data.pathname.split('/')[2]
        getCategoryData(id)
    
      },[data])

// Funciones
    function handleForm(e){
        setForm({
              name:e.target.value
        })
      }
    
    async function handleSubmit(e){
        e.preventDefault();

        try{

            setForm({name:''})
        }catch(err){
            setForm({name:''})
        }
    }

    
  return (
    <EditCategoryTemplate
        form={form}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
    />
  )
}

export default EditCategory