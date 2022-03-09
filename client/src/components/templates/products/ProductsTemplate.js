import React from 'react'
import { Outlet } from 'react-router-dom'
import InternNavbar from '../../organisms/InternNavbar'

const ProductsTemplate = () => {
  let header = [{name:'Filtros', page:'/productos'},{name:'Serivicios', page:'/productos/servicios'},{name:'Categorias',page:'/productos/categorias'}]
  return (
    <>  
        <InternNavbar
        items={header}
        />
        <Outlet/>
    </>
  )
}

export default ProductsTemplate