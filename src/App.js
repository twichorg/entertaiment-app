import React from 'react';
import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import EventDetail from './pages/EventDetail';

export const EventsContext = React.createContext();

function App() {
  const [events, setEvents] = React.useState([]); // state for events

  const options = { // options for the API call
    headers: {"X-Etkinlik-Token": "7ad15269ce29ac424d6fb5eab5bc8b62"} // api key
}

const fetchData = async () => { // fetch data from the API
  const response = await fetch("https://backend.etkinlik.io/api/v2/events?take=30", options); // api call
  const data = await response.json(); // parse the response to JSON
  setEvents(data.items);  // set the data to the state
}

useEffect(() => {
  fetchData();  // fetch data on component mount
}, []);

  return (
    <EventsContext.Provider value={events}>
     <BrowserRouter>               
         <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route  path="/event" element={<EventDetail/>} />
         </Routes>
        </BrowserRouter>
    </EventsContext.Provider>
  );
}

export default App;
