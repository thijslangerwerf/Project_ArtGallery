import React from 'react'
import Card from './Card.jsx'
const homeCards = () => {
  return (
    <div>
      Thuisbasis voor de kaartjes
      <Card children = 'ábra' bg='kaartje2'/>
      <Card children = 'kadabra'/>
      <Card children = 'alakhazam'/>
    </div>
  )
}

export default homeCards
