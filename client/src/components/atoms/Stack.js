import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    gap: ${({spacing})=> spacing * 0.25}rem;
    flex-wrap: ${({wrap})=>wrap === 'true' ? 'wrap' : 'nowrap' } ;
    flex-direction: ${({direction})=>direction };
    align-items: ${({items})=>items };
    justify-content: ${({content})=>content };
    margin: ${({margin})=>margin };
    padding: ${({padding})=>padding };
`

function Stack({ children, spacing=2, direction="row", wrap='false',content='center',items='center', margin='0',padding='0'}) {

  return <Container spacing={spacing} direction={direction} wrap={wrap} content={content} items={items} margin={margin} padding={padding}>{children}</Container>
}

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.oneOf(["true", "false"]),
  direction: PropTypes.oneOf(["row", "column"]),
}

export default Stack