import React from 'react'
import { EventsContext } from '../App'
import EventCard from './EventCard'

const EventList = () => {

    const events = React.useContext(EventsContext); // get the events from the context

    const [value, setValue] = React.useState(''); // set the value of the search input

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input 
        type="search" 
        placeholder="Search..." 
        className='search'
        onChange={handleOnChange}
         />

        
        </form>
    </header>
    
    <div className='event-container'> 
        {events
        .filter(event => event.name.toLowerCase().includes(value.toLowerCase()) || event.category.name.toLowerCase().includes(value.toLowerCase()))
        .map(event => {
            return  <div key={event.id}>
            <EventCard event={event} />
            </div>
        })}
    </div>
    </>
  )
}

export default EventList