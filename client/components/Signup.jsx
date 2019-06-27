import React from 'react'
import { addAUser } from '../api'

export default class Signup extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      email_address: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitUser = this.submitUser.bind(this)
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sayHello () {
    console.log('user has been added')
  }

  submitUser = e => {
    addAUser(this.state, this.confirmation)
  }

  render () {
    return (
      <React.Fragment>

        <div>
          <h3>Sign Up to Aspire</h3>
          <div>
            <form method="POST">
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.changeHandler}
                placeholder='First Name:'
                name="first_name" />
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.changeHandler}
                placeholder='Last Name:'
                name="last_name" />
              <input
                type="text"
                value={this.state.username}
                onChange={this.changeHandler}
                placeholder='User Name:'
                name="username" />
              <input
                type="text"
                value={this.state.password}
                onChange={this.changeHandler}
                placeholder='Password:'
                name="password" />
              <input
                type="text"
                value={this.state.email_address}
                onChange={this.changeHandler}
                placeholder='Email Address:'
                name="email_address" />
            </form>
          </div>
          <button onClick ={this.submitUser} type="button">Sign Up</button>
        </div>

      </React.Fragment>
    )
  }
}
