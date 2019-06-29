import React from 'react'
import { userLogin } from '../api'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
  }
  
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  confirmation () {
    console.log('user has logged in')
  }

  submitLogin = e => {
    userLogin(this.state, this.confirmation)
  }

  render () {
    return (
      <React.Fragment>

        <div>
          <h3>Login</h3>
          <div>
            <form>
              <input
                type="text"
                value={this.state.username}
                onChange={this.changeHandler}
                placeholder='Username'
                name="username" />
              <input
                type="text"
                value={this.state.password}
                onChange={this.changeHandler}
                placeholder='Password'
                name="password" />
            </form>
          </div>
          <button onClick={this.submitLogin}>Login</button>
        </div>

      </React.Fragment>
    )
  }
}

export default Login
