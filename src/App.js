import React from 'react';
import {Component} from 'react';
import {
  Switch,
    Route,
  } from "react-router-dom";
  import EventsContainer from './containers/EventsContainer'
  import ClientsContainer from './containers/ClientsContainer'
  import EventForm from './components/events/EventForm'
  import ClientForm from './components/clients/ClientForm'
  import Client from './components/clients/Client'

    import NavBar from './components/NavBar';
 

    export default class App extends Component {

        render() {
            return (
                     <div>
                            < NavBar />
                            <Switch>
                                    <Route exact path="/">< Home /> </Route>
                                    <Route exact path="/events">< Events /> </Route>
                                    <Route exact path="/clients"> <Clients /> </Route>
                                    <Route exact path='/events/new' component={EventForm} />
                                    <Route exact path='/clients/new' component={ClientForm} />
                                    <Route exact path='/clients/:id'component={Client}/>
                            </Switch> 
                     
                    </div> 
            )
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