import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ClientItem from '../../organisms/ClientItem'
import Searchbar from '../../organisms/Searchbar'

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

const ClientesTemplate = ({
  clients,
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
      placeholder='Ingrese el nombre del cliente'
      handleClick={()=> navigate('new')}
      />
        <ClientList>
          {
            isLoading ?
            <h2>Buscando</h2>
            :
              clients && clients.length > 0 ?
                  clients.map(el=>{
                  return <ClientItem
                    key={el._id}
                    surname={el.surname}
                    name={el.name}
                    email={el.email}
                    phone={el.phone}
                    vehicles={el.vehicles.length}
                    ver={()=>navigate(`${el._id}`)}
                    eliminar={()=>handleDelete(el._id,`${el.name} ${el.surname}`)}
                    />
                  })
              :
              <h2>No se encontraron Resultados</h2>
          }
        </ClientList>

    </Container>
  )
}

export default ClientesTemplate