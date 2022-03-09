import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ClientProfileTemplate from '../../components/templates/clients/ClientProfileTemplate'
import AxiosInstance from '../../utils/AxiosInstance';

const ClientProfile = () => {
    let data = useLocation();
    let navigate = useNavigate();
    const [client, setClient] = useState(null)

    useEffect(()=>{

        async function getClientProfile(clientId){
            let {data} = await AxiosInstance.get(`client/${clientId}`)
            if(data){
                setClient(data.response)
            }
        }

        let id = data.pathname.split('/')[2]

        if(id){
            getClientProfile(id)
        }
    },[data])

  return (
      <>
        <ClientProfileTemplate
        client={client}
        navigate={navigate}
        
        />
      </>
  )
}

export default ClientProfile