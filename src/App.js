import React from 'react';
import {Component} from 'react';
import {
  Switch,
    Route,
  } from "react-router-dom";
  import EventsContainer from './containers/EventsContainer'
  import ClientsContainer from './containers/ClientsContainer'
  import EventForm from './components/events/EventForm'


    import NavBar from './components/NavBar';
 

    export default class App extends Component {

        render() {
            return (
                     <div>
                            < NavBar />
                            <Switch>
                                    <Route exact path="/">< Home /> </Route>
                                    <Route exact path="/events">< Events /> </Route>
                                    <Route path="/clients"> <ClientsContainer /> </Route>
                                    <Route exact path='/events/new' component={EventForm} />
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

