import React, {useEffect, useState} from 'react'
import NewProductTemplate from '../../components/templates/products/NewProductTemplate';
import { useNotification } from '../../hooks/useNotification';
import AxiosInstance from '../../utils/AxiosInstance';

const initialForm = {
  code:'',
  precio:'',
  cantidad:'',
  categoria:'',
  aplicacion:'',
}

const NewProduct = () => {
  const [form, setForm] = useState(initialForm); 
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState({category:''})
  const {handleMessage} = useNotification()

  useEffect(()=>{
      async function getCategories(){
        let {data} = await AxiosInstance.get('category');
        if(data){
          let categories = data.response.categories;
          categories = categories.map(el=>{
              return{
                value:el._id,
                label:el.name
              }
          })
          setCategories(categories)
        }
      }
      getCategories()
  },[])

// Funciones 
  function handleForm(e){
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  function handleSelect(e){
    setCategory({
        [e.name]:e.value,
    })
    setForm({
        ...form,
        categoria:e.value,
    })
}

  async function handleSubmit(e){
    e.preventDefault();
    let string = new URLSearchParams();
    string.append(`code`,`${form.code}`)
    string.append(`categoria`,`${form.categoria}`)
    string.append(`precio`,`${form.precio}`)
    string.append(`cantidad`,`${form.cantidad}`)
    string.append(`aplicacion`,`${form.aplicacion}`)
    try{

      let {data} = await AxiosInstance.post('product',string);
      if(data){
        setForm(initialForm)
        setCategory({category:''})
        handleMessage(data?.ok,data?.msg)
      }
    }catch(err){
      if(err && err?.response?.data){
        handleMessage(err?.response?.data?.ok,err?.response?.data?.msg)
        
      }
      setCategory({category:''})
      setForm(initialForm)
    }
  }
  return (
    <>
        <NewProductTemplate
        form={form}
        category={category.category}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
        options={categories}
        />
    </>
  )
}

export default NewProduct