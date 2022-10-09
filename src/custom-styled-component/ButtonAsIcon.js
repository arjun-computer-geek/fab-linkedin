import React from 'react'
import styled from 'styled-components'

export const ButtonAsIcon = (props) => {
  return (
    <Button >
        <img src={props.src} alt="icon"/>
    </Button>
  )
}
const Button = styled.button`
height: 25px;
width: 25px;
border: none;
img{
    height: 100%;
    width: 100%;
}
`