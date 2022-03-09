import React from 'react';
import styled from 'styled-components';
import Working from '../../assets/img/working.svg'
import { Devices } from '../GlobalStyle';

const Container = styled.div`
    margin:1rem 0;
    display:flex;
    flex-direction:column;
    gap:3rem;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    @media ${Devices.Tablets}{
        gap:3rem;
    }

`
const Image = styled.img`
    width:100%;
    object-fit:cover;
    @media ${Devices.Tablets}{
        width:45%;
        object-fit:cover;
    }
`

const InProgress = () => {
  return (
        <Container>
            <Image src={Working} alt='Pagina en desarrollo'/>
        </Container>
  );    
};

export default InProgress;
