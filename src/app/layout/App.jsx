import React,{Fragment} from 'react'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import {Container} from 'semantic-ui-react';
import { Route, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage';

import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import ModalManager from './../common/modals/ModalManager'
import {ToastContainer} from 'react-toastify'
import ErrorComponent from '../common/errors/ErrorComponents';
import AccountPage from '../../features/auth/AccountPage';
import { useSelector } from 'react-redux';
import LoadingComponent from './LoadingComponent';
import ProfilePage from '../../features/profiles/profilePage/ProfilePage';

function App() {
 
  const {key} = useLocation();
 
  const {initialized} = useSelector((state) => state.async);

  if(!initialized) return <LoadingComponent content="Loading app..."/>

  return (
    <Fragment>
     <ModalManager/>
     <ToastContainer position="bottom-right"  hideProgressBar/>
      <Route exact path="/" component={HomePage} />
      <Route path={'/(.+)'} render={()=>(
        <>
     <NavBar />
      <Container className="main">
        
        <Route exact path="/events" component={EventDashboard} />
        <Route exact path="/sandbox" component={Sandbox} />
        <Route path="/events/:id" component={EventDetailedPage} />
        <Route path={['/createEvent','/manage/:id']} component={EventForm} key={key}/>
        <Route path="/account" component={AccountPage}/>
        <Route path="/profile/:id" component={ProfilePage}/>
       <Route path="/error" component={ErrorComponent}/>
        
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
