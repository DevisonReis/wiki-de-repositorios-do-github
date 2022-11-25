import React from 'react'

import { ContainerInput } from './styles';

function Input({value, onChange}) {
  return (
    <ContainerInput>
        <input value={value} onChange={onChange}/>
    </ContainerInput>
  )
}

export default Input
