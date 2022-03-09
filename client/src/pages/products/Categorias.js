import React, { useEffect, useState } from 'react'
import CategoriasTemplate from '../../components/templates/products/CategoriasTemplate'
import { useNotification } from '../../hooks/useNotification'
import AxiosInstance from '../../utils/AxiosInstance'



const Categorias = () => {
    const [search, setSearch] = useState({search:''})
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [deleted, setDeleted] = useState(null)
    // const {handleMessage} = useNotification()

    // Effcts
    useEffect(()=>{
      async function getCategories(){
          let {data} = await AxiosInstance.get('category')
          if(data){
              setCategories(data.response.categories)
          }
      }
      async function searchCategories(){
          if(search && search.search.length > 2){
            setIsLoading(true)

            let {data} = await AxiosInstance.get(`category/${search.search}`)
            setIsLoading(false)
            setCategories(data.response.categories)
          }
      }

      if(search && search.search.length > 2){
          searchCategories();
      }else{
          getCategories();
      }
  },[search,deleted])

// Funciones

  function handleSearch(e){
      setSearch({
          [e.target.name]:e.target.value,
      })
  }

  async function handleDelete(categoryId,categoryName){
    alert(`Al eliminar la categoria ${categoryName} eliminaras todos sus productos`);
    let res = window.confirm(`Seguro que quieres eliminar la categoria ${categoryName}`)
    if(res){
        setDeleted(categoryId)
    }
}

  return (
    <>
        <CategoriasTemplate
          categories={categories}
          isLoading={isLoading}
          search={search.search}
          handleSearch={handleSearch}
          handleDelete={handleDelete}
        />
    </>
  )
  }

export default Categorias