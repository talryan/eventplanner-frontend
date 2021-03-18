// import React from 'react';
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
 
// const EventList = ({ events }) => {
//     return (
//         <div>
//             <h1>events List:</h1>
//             {events.map(event => 
//                 <ul key={event.id}>
//                     <li >
//                     <Link to= {`events/${event.id}`}>
                       
//                         {event.date} - {event.time}
                    
//                     </Link>
//                     </li>
//                 </ul>
//         )}
//         </div>
//     );
// };

// const mapStateToProps = state => {
//     return { events: state.events }
// }

// export default connect(mapStateToProps)(EventList);