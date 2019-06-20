import React from 'react'

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
        <button>Login</button>
      </div>

      </React.Fragment>
    )
  }
}

export default Login