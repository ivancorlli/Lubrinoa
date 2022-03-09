import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Searchbar from '../../organisms/Searchbar'
import VehicleItem from '../../organisms/VehicleItem'

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`
const ClientList = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const VehiclesTemplate = ({
  vehicles,
  isLoading,
  search,
  handleSearch,
  handleDelete,
}) => {

  const navigate = useNavigate();

  return (
    <Container>
      <Searchbar
      search={search}
      handleSearch={handleSearch}
      placeholder='Ingrese la patente del vehiculo'
      handleClick={()=> navigate('new')}
      />

        <ClientList>
          {
            isLoading ?
            <h2>Buscando</h2>
            :
              vehicles && vehicles.length > 0 ?
                  vehicles.map(el=>{
                  return <VehicleItem
                  key={el._id}
                  patent={el?.patent}
                  mark={el?.mark}
                  model={el?.model}
                  km={el?.km}
                  year={el?.year}
                  ver={()=> navigate(`/clientes/${el.owner._id}`)}
                  eliminar={()=> handleDelete(el._id, el.patent)}
                  />
                  })
              :
              <h2>No se encontraron Resultados</h2>
          }
        </ClientList>

    </Container>
  )
}

export default VehiclesTemplate