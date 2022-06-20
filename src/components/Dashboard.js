import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'

class Dashboard extends Component {
render(){
return <div>
    <Line
    data={{
        labels: ['Tentative', 'Confirmed', 'Cancelled', 'Closed'],
        datasets: [
            {
            label: 'Revenue by Event Status', 
            data: [
                this.props.tentativeStatus.total, 
                this.props.confirmedStatus.total, 
                this.props.cancelledStatus.total,
                this.props.closedStatus.total
                    ],
            backgroundColor: [
               '#F5EA69',
               '#69F5A9',
               '#D3386E',
               '#CB6EFF'
            ]
            }
        ]
    }}
    height={400}
    width = {600}
    options= {{maintainAspectRatio: false }}
  
    />

</div>

}
}

const mapStateToProps = ({events}, ownProps) => {
  
    const tentativeStatus= events.filter(event => event.total)
    const confirmedStatus= events.filter(event => event.status === "Confirmed")
    const cancelledStatus= events.filter(event =>  event.status === "Cancelled")
    const closedStatus= events.filter(event =>  event.status === "Closed")

    return{tentativeStatus, confirmedStatus, cancelledStatus, closedStatus}

   
  
}

export default connect(mapStateToProps)(Dashboard);