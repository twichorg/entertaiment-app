import React from 'react'
import { useLocation } from 'react-router-dom'


const EventDetail = () => {
  const location = useLocation();

  return (
    <div>
      <h1>{location.state.name}</h1>
      <h2>{location.state.id}</h2>
    </div>
  )
}

export default EventDetail