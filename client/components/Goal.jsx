import React from 'react'
import { Link } from 'react-router-dom'

class Goal extends React.Component {
  render() {
    return (
      <>
        <div className="goalcontainer">
          <h1>Climb Mt Everest</h1>
          <div>
            <p>Goal Description</p>
            <p>Why do you want to achieve this goal?</p>
            <p>Date to (hopefully) complete it by.</p>
            <p>You are currently not receiving email updates on your progress with this goal.
            Would you like to change this?
            </p>
            <button>Edit this goal</button>
            <button><Link to="/user/:id">Home</Link></button>
          </div>
        </div>
      </>
    )
  }
}

export default Goal