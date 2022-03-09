import React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import { BorderRadius, Devices, ZIndex } from '../GlobalStyle'

const NotiContainer = styled.div`
    position: absolute;
    top:15%;
    right:0;
    background:${({bg,theme})=> bg === true ? theme.action.warning : theme.action.danger};
    width: 50%;
    height: 10%;
    border-top-left-radius:${BorderRadius.md};
    border-bottom-left-radius:${BorderRadius.md};
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-shadow:1px 1px 20px grey;
    padding: 0.5rem;
    z-index:${ZIndex[50]};
    @media ${Devices.Tablets}{
      padding: 0.25rem;
      width: 30%;
      height: 10%;
    }
`

const Notification = ({message,bg}) => {
  return (
    <NotiContainer bg={bg}>
        <Text
        weight='bold'
        color={bg === true ? 'fontDark' : 'fontLight'}
        >{message}</Text>
    </NotiContainer>
  )
}

export default Notification