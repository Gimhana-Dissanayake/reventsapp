import React,{Fragment} from 'react'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import {Container} from 'semantic-ui-react';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

function App() {

  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path={'/(.+)'} render={()=>(
        <>
     <NavBar />
      <Container className="main">
        
        <Route exact path="/events" component={EventDashboard} />
        <Route path="/events/:id" component={EventDetailedPage} />
        <Route path={['/createEvent','/manage/:id']} component={EventForm} />
       
        
      {/* <EventDashboard 
      formOpen={formOpen} 
      setFormOpen={setFormOpen} 
      selectEvent={handleSelectEvent} 
      selectedEvent={selectedEvent}/> */}
      </Container>
        </>
      )}>

      </Route>
 
     
     </Fragment>
  );
}

export default App;
