import React from 'react'
import { addAGoal } from '../api'

class Addgoal extends React.Component {

  state = {
    goal_name: '',
    goal_description: '',
    why: '',
    image: '',
    date: '',
    notifications: ''
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  confirmation () {
    console.log('goal has been added')
  }

  submitGoal = e => {
    addAGoal(this.state, this.confirmation)
  }

  render () {
    return (
      <>
        <div>
          <h3>Add A New Goal</h3>
          <div>
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                value={this.state.goal_name}
                onChange={this.changeHandler}
                placeholder="Goal Name:"
                name="goal_name" />
              <input
                type="text"
                value={this.state.goal_description}
                onChange={this.changeHandler}
                placeholder="Goal Description"
                name="goal_description" />
              <input
                type="text"
                value={this.state.why}
                onChange={this.changeHandler}
                placeholder="Why do you want to achieve this goal?"
                name="why" />
              <label htmlFor="image">Upload an image that represents this goal to you.</label>
              <input
                type="file"
                value={this.state.image}
                onChange={this.changeHandler}
                name="image" />
              <input
                type="date"
                value={this.state.date}
                onChange={this.changeHandler}
                placeholder="When do you want to achieve this by?"
                name="date" />
              <label htmlFor="notifications">Do you want regular email updates on your progress with this goal?</label>
              <input
                type="checkbox"
                value={this.state.notifications}
                onChange={this.changeHandler}
                name="notifications" />
            </form>
          </div>
          <button onClick={this.submitGoal}>Add Goal</button>
        </div>
      </>
    )
  }
}

export default Addgoal
