import React from 'react';
import Router from './components/Router'
import EventsContainer from './containers/EventsContainer'


const App = () => {
    return (
        <div>
            <EventsContainer />
            <Router />
        </div>
    );

};

export default App;