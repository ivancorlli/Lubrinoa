import React, { useEffect, useState } from 'react'
import FiltrosTemplate from '../../components/templates/products/FiltrosTemplate'
import { useNotification } from '../../hooks/useNotification';
import AxiosInstance from '../../utils/AxiosInstance';

export const Filtros = () => {
    const [search, setSearch] = useState({search:''})
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [deleted, setDeleted] = useState(null)
    const {handleMessage} = useNotification()


// Efectos
useEffect(()=>{
    async function getPoducts(){
        let {data} = await AxiosInstance.get('products')
        if(data){
            setProducts(data.response)
        }
    }
    async function searchProducts(){
        if(search && search.search.length > 2){
          setIsLoading(true)
          let {data} = await AxiosInstance.get(`products/${search.search}`)
          setIsLoading(false)
          setProducts(data.response)
        }
    }

    if(search && search.search.length > 2){
        searchProducts();
    }else{
        getPoducts();
    }
},[search,deleted])


// Funciones
 function handleSearch(e){
     setSearch({
         [e.target.name]:e.target.value,
     })
 }
 async function handleDelete(productId){
    let {data} = await AxiosInstance.delete(`product/${productId}`);
    if(data){
      setDeleted(productId)
      handleMessage(data.ok,data.msg)
    }
  }

  return (
   <>
    <FiltrosTemplate
        products={products}
        isLoading={isLoading}
        search={search.search}
        handleSearch={handleSearch}
        handleDelete={handleDelete}
    />
   </>
  )
}
