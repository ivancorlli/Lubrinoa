import { IoAdd} from "react-icons/io5"
import styled from "styled-components"
import ActionButton from "../atoms/ActionButton"
import Input from "../atoms/Input"
import { Devices } from "../GlobalStyle"
import Menu from "./Menu"


const Container = styled.div`
    width: 100%;
    display:flex;
    flex-direction:row;
    align-items:center; 
    justify-content:center;
    gap:1rem;
    margin:0 .25rem;
    @media ${Devices.Tablets}{
        margin:0 ;
        width: 75%;
        gap:2rem;
    }

`

const Searchbar = ({
    search,
    placeholder='Ingrese un valor',
    handleSearch,
    options,
    handleClick,
    children,
}) => {
  return (
    <Container>
        {
            options &&(
                <Menu options left='20%' top='150px'>
                    {children}
                </Menu>
            )
        }

        <Input
            name='search'
            type="search"
            value={search}
            placeholder={placeholder}
            onChange={handleSearch}
            bg='fontLight'
            width="100%"
        />

        <ActionButton color="light" display='true' onClick={handleClick}>
                Nuevo
        </ActionButton>
        <ActionButton color="light" displayT='true' onClick={handleClick}>
                <IoAdd width='1rem'/>
        </ActionButton>
    </Container>
  )
}

export default Searchbar