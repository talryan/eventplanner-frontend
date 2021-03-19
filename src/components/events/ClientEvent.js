import React from 'react';
import { connect } from 'react-redux';


 
//  const ClientEvent = (props) => {
//     debugger
//     return (
      
//         <div>
//             <h1>You made it!:</h1>
            
            
         
        
    
//         </div>
//     );
// };



// export default ClientEvent

class ClientEvent extends React.Component {

    eventInfo() {

        let event = this.props.events.find(event => event.id === parseInt(this.props.routeInfo.match.params.id))
        return (
            <div> 
                {event.date}
            </div>
        )
    }
    render() {
        console.log(this.props)
    return (
        <div>
            <h1> WE DID IT! </h1>
            {this.props ? this.eventInfo() : <h1> no events</h1>}

        </div>

    )
    }

}
const mapStateToProps = state => {
  
    return {
        events: state.events,
       
    }
}


export default connect(mapStateToProps)(ClientEvent)