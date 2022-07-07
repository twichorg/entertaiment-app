import React from 'react'
import { useNavigate} from 'react-router-dom';

const EventCard = ({event}) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/event',{state: {name:event.name, id:event.id}});
  }
  
  return (
    <div className='event' onClick={handleClick}>
    <img src={event.poster_url} alt="images" /> 
      <div className='event-info'>
        <h3>{event.name}</h3>
        <span>{event.category.name}</span>
      </div>

      <div className='event-over'>
        <h2>Overview</h2>
        <p>{event.content}</p>
      </div>
    </div>
  )
}

export default EventCard