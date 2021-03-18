import React from 'react';
import {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import EventsContainer from '../containers/EventsContainer'
  import ClientsContainer from '../containers/ClientsContainer'
  import EventForm from './events/EventForm'
  import ClientForm from './clients/ClientForm'

export default class NavBar extends Component {
    render() {
        return (
          <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/">Home</Link><br />
                        <Link to="/events">Events</Link><br />
                        <Link to ="/clients"> Clients </Link><br />
                        These two need to be combined into new event <br />
                        <Link to="/events/new">New Event</Link> <br />
                        <Link to="/clients/new">New Client</Link>

                        
                    </li>
                    </ul>
                </div>

<Switch>
<Route exact path="/">< Home /> </Route>
<Route exact path="/events">< Events /> </Route>
<Route exact path="/clients"> <Clients /> </Route>
<Route exact path='/events/new' component={EventForm} />
<Route exact path='/clients/new' component={ClientForm} />
<Route exact path='/clients/:id'><ClientShow /> </Route>
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

function Clients()  {
return (
<div>
<h2>Clients</h2>
<ClientsContainer />
</div>
);
}

function ClientShow()  {
return (
<div>
<h2>Clients Show!</h2>

</div>
)
}