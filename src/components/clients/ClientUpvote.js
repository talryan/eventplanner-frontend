import React from 'react'

class ClientUpvote extends React.Component {
    state = {
        upvote: 1
    }

    increaseVote = () => {
        let newVote = this.state.upvote + 1
    }

    render() {
        return (
           <button onClick={() => this.increaseVote()}>  </button>
        )
    }
}

export default ClientUpvote;