import React from 'react'
import { Link } from 'react-router-dom'
import Userhome from './Userhome'

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  changeHandler = e => {
    this.setState({ 
      [ e.target.name ]: e.target.value })
  } 

  render() {
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
            name="username"/>
            <input 
            type="text"
            value={this.state.password}
            onChange={this.changeHandler}
            placeholder='Password'
            name="password"/>
          </form>
        </div>
        <button><Link to={"/user/:id"}>Login</Link></button>
      </div>

      </React.Fragment>
    )
  }
}

export default Login