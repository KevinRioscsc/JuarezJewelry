import React from 'react'
import {Title, Name} from './Heading'

const Heading = ({id}) => {
  return (
    <>
        <Title>{`shop/${id}`}</Title> 
        <Name>{id}</Name>
    </>
  )
}

export default Heading