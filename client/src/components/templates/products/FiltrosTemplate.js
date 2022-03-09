import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Stack from '../../atoms/Stack'
import Text from '../../atoms/Text'
import { MenuItem } from '../../organisms/Menu'
import ProductItem from '../../organisms/ProductItem'
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
const ContainerChild = styled.div`
display: flex;
flex-direction:column;
align-items:start;
justify-content:start;
`

const FiltrosTemplate = ({
    search,
    handleSearch,
    isLoading,
    products,
    handleDelete

}) => {
    const navigate = useNavigate();
  return (
    <Container> 
        <Searchbar
        options
        search={search}
        handleSearch={handleSearch}
        handleClick={()=>navigate('/productos/new')}
        placeholder='Ingrese el codigo del producto'
        >
        <ProductsMenu/>
        </Searchbar>
        <ClientList>
          {
            isLoading ?
            <h2>Buscando</h2>
            :
              products && products.length > 0 ?
                  products.map(el=>{
                  return <ProductItem
                  key={el._id}
                  code={el.code}
                  precio={el.precio}
                  aplicacion={el.aplicacion}
                  categoria={el.categoria.name}
                  cantidad={el.cantidad}
                  editar={()=>navigate(`/productos/${el._id}`)}
                  eliminar={()=> handleDelete(el._id)}
                  />
                  })
              :
              <h2>No se encontraron Resultados</h2>
          }
        </ClientList>
    </Container>
  )
}

export default FiltrosTemplate


function ProductsMenu (){
  const navigate = useNavigate();

  return(
    <ContainerChild>
      <MenuItem onClick={()=>navigate('add-many')}>
          <Stack items='center' content='start'>
            <Text
            color='fontDark'
            weight='semibold'
            >
              Crear Productos
            </Text>
          </Stack>
      </MenuItem>
      <MenuItem onClick={()=>navigate('edit-many')}>
          <Stack items='center' content='start'>
            <Text
            color='fontDark'
            weight='semibold'
            >
             Actualizar Productos
            </Text>
          </Stack>
      </MenuItem>
      
    </ContainerChild>
  )
}