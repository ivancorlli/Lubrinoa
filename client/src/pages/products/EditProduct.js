import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import EditProductTemplate from '../../components/templates/products/EditProductTemplate';
import { useNotification } from '../../hooks/useNotification';
import AxiosInstance from '../../utils/AxiosInstance';

const initialForm = {
  id:'',
  code:'',
  precio:'',
  cantidad:'',
  categoria:'',
  aplicacion:'',
}

const EditProduct = () => {
  const [form, setForm] = useState(initialForm); 
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState({category:''})
  const {handleMessage} = useNotification()
  let data = useLocation();

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

  useEffect(()=>{

    async function getProductData(productId){
        let {data} = await AxiosInstance.get(`product/${productId}`)
        if(data){
            let product = data.response
            setForm({
                id:product._id,
                code:product.code,
                precio:product.precio,
                cantidad:product.cantidad,
                categoria:product.categoria._id,
                aplicacion:product.aplicacion,
            })
        }
      }

    let id = data.pathname.split('/')[2]
    getProductData(id)

  },[data])

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
    string.append(`id`,`${form.id}`)
    string.append(`code`,`${form.code}`)
    string.append(`categoria`,`${form.categoria}`)
    string.append(`precio`,`${form.precio}`)
    string.append(`cantidad`,`${form.cantidad}`)
    string.append(`aplicacion`,`${form.aplicacion}`)
    try{

      let {data} = await AxiosInstance.patch('product',string);
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
        <EditProductTemplate
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

export default EditProduct