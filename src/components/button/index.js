import React from 'react'
import { ContainerButton } from './styles'

function Button({onClick}) {
  return (
    <ContainerButton onClick={onClick}>
        Buscar
    </ContainerButton>
  )
}

export default Button
