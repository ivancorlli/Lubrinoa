import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CategoryItem from '../../organisms/CategoryItem'
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

const ServiciosTemplate = ({
  categories,
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
      placeholder='Ingrese el nombre del servicio'
      handleClick={()=> navigate('new')}
      />
        <ClientList>
          {
            isLoading ?
            <h2>Buscando</h2>
            :
              categories && categories.length > 0 ?
                  categories.map(el=>{
                  return <></>
                  })
              :
              <h2>No se encontraron Resultados</h2>
          }
        </ClientList>

    </Container>
  )
}

export default ServiciosTemplate