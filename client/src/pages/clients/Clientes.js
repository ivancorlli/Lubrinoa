import React, { useEffect, useState } from 'react'
import ClientesTemplate from '../../components/templates/clients/ClientesTemplate'
import { useNotification } from '../../hooks/useNotification'
import AxiosInstance from '../../utils/AxiosInstance'



const Clientes = () => {
    const [search, setSearch] = useState({search:''})
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [deleted, setDeleted] = useState(null)
    const {handleMessage} = useNotification()

    // Effcts
    useEffect(()=>{
      async function getClients(){
          let {data} = await AxiosInstance.get('clients')
          if(data){
              setClients(data.response.clients)
          }
      }
      async function searchClients(){
          if(search && search.search.length > 2){
            setIsLoading(true)
            let string = search.search.split(' ');
            let name = string[0];
            let surname = string[1];
            let {data} = await AxiosInstance.get(`clients/${name}/${surname}`)
            setIsLoading(false)
            setClients(data.response.clients)
          }
      }

      if(search && search.search.length > 2){
          searchClients();
      }else{
          getClients();
      }
  },[search,deleted])

// Funciones

  function handleSearch(e){
      setSearch({
          [e.target.name]:e.target.value,
      })
  }

  async function handleDelete(clientId,clientName){
    alert(`Al eliminar el Cliente ${clientName} tambien eliminaras todos los datos realacionados, incluyendo los datos de sus vehiculos`)
    let res = window.confirm(`Quieres eliminar el cliente ${clientName} ?`)
    if(res){
        let {data} = await AxiosInstance.delete(`client/${clientId}`)
        if(data){
            setDeleted(clientId)
            handleMessage(data?.ok,data?.msg)
        }
    }
}

  return (
    <>
        <ClientesTemplate
          clients={clients}
          isLoading={isLoading}
          search={search.search}
          handleSearch={handleSearch}
          handleDelete={handleDelete}
        />
    </>
  )
  }

export default Clientes