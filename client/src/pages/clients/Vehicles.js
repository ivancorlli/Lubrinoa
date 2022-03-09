import React, { useEffect, useState } from 'react'
import VehiclesTemplate from '../../components/templates/clients/VehiclesTemplate'
import { useNotification } from '../../hooks/useNotification';
import AxiosInstance from '../../utils/AxiosInstance';

const Vehicles = () => {
    const [search, setSearch] = useState({search:''})
    const [vehicles, setVehicles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [deleted, setDeleted] = useState(null)
    const {handleMessage} = useNotification()

    useEffect(()=>{
        async function getVehicles(){
            let {data} = await AxiosInstance.get('vehicles')
            if(data && data.response.vehicles.length > 0){
                setVehicles(data.response.vehicles);
            }
        }

        async function searchVehicle(){
            if(search && search.search.length > 2){
                setIsLoading(true)
                let patent = search.search;
                let {data} = await  AxiosInstance.get(`vehicles/${patent}`);
                if(data && data.response.vehicles.length > 0){
                    setIsLoading(false)
                    setVehicles(data.response.vehicles)
                }
            }
        }

        if(search && search.search.length > 2){
            searchVehicle()
        }else{
            getVehicles()
        }
        
    },[search,deleted])


// Funciones
    function handleSearch(e){
        setSearch({
            [e.target.name]:e.target.value
        })
    }

    async function handleDelete(vehicleId,patent){
        alert(`Al eliminar el vehiculo ${patent} se perderan todos sus datos almacenados`);
        let res = window.confirm(`Estas seguro de eliminar el vehiculo ${patent}`)
        if(res){
            let {data} = await AxiosInstance.delete(`vehicle/${vehicleId}`)
            if(data){
                setDeleted(vehicleId)
                handleMessage(data.ok,data.msg)
            }
        }
    }

  return (
    <VehiclesTemplate
        vehicles={vehicles}
        isLoading={isLoading}
        search={search.search}
        handleSearch={handleSearch}
        handleDelete={handleDelete}
    />
  )
}

export default Vehicles