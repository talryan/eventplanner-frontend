import React from 'react';
import {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import EventsContainer from './containers/EventsContainer'
  import EventForm from './components/events/EventsForm'

    export default class App extends Component {
    render() {
        return (
          <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/">Home</Link><br/>
                        <Link to="/events">Events</Link><br/>
                        <Link to="/events/new">New Event</Link>
                    </li>
                    </ul>
                </div>
                    <Switch>
                        <Route exact path="/">< Home /> </Route>
                        <Route exact path="/events">< Events /> </Route>
                        <Route exact path='/events/new' component={EventForm} />
                    </Switch>
            </Router> 
        );

      }
 }

 function Home() {
    return (
      <div>
        <h2>Home Page</h2>
      </div>
    );
  }

  function Events()  {
    return (
      <div>
        <h2>Events</h2>
        <EventsContainer />
      </div>
    );
  }