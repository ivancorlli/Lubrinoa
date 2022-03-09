import React from 'react'
import { Outlet } from 'react-router-dom'
import InternNavbar from '../../organisms/InternNavbar'

const ClientsTemplate = () => {
  let header = [{name:'Clientes', page:'/clientes'},{name:'Vehiculos', page:'/clientes/vehiculos'},]
  return (
    <>  
        <InternNavbar
        items={header}
        />
        <Outlet/>
    </>
  )
}

export default ClientsTemplate