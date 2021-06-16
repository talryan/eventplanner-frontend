import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {Doughnut} from 'react-chartjs-2'

class EventChart extends Component {
render(){
return <div className='event-chart'>
    <br />
    <br />
    <br />
    <br />
    <h1 className = "w3-center w3-padding-64"><span class="w3-tag w3-wide">TOTAL NUMBER OF EVENTS: {this.props.totalEvents}</span> </h1>
    <Doughnut
    data={{
      
      
        datasets: [
            {
            label: 'Events by Status', 
            data: [
                this.props.tentativeStatus, 
                this.props.confirmedStatus, 
                this.props.cancelledStatus,
                this.props.closedStatus
                    ],
            backgroundColor: [
                '#e2b585',
                '#96ac9d',
                '#c36643',
                '#4c251b'
            ],
           
            }
        ],
        labels: ['Tentative', 'Confirmed', 'Cancelled', 'Closed']
    }}
    height={250}
    width = {600}
    options= {{maintainAspectRatio: false }}
  
    />

</div>

}
}

const mapStateToProps = ({events}, ownProps) => {
  
    const tentativeStatus= events.filter(event => event.status === "Tentative").length
    const confirmedStatus= events.filter(event => event.status === "Confirmed").length
    const cancelledStatus= events.filter(event => event.status === "Cancelled").length
    const closedStatus= events.filter(event => event.status === "Closed").length
    const totalEvents= events.length
    return{tentativeStatus, confirmedStatus, cancelledStatus, closedStatus, totalEvents}
  
}

export default connect(mapStateToProps)(EventChart);