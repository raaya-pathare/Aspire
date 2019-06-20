import React from 'react'

class Signup extends React.Component {

  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email_address: '',
  }

  changeHandler = e => {
    this.setState({ 
      [ e.target.name ]: e.target.value })
  } 

  submitHandler = e => {
    e.preventDefault()
    const field = e.target
    this.setState({
      first_name: field.first_name.value
    })
    fetch('users', {
      method: 'POST',
      data: {
        
      }
    })
    // return db('users')  
    // .insert({ first_name: this.first_name })
    //Other code lol
    //Submit to users table
  }

  render() {
    return(
      <React.Fragment>

        <div>
          <h3>Sign Up to Aspire</h3>
          <div>
            <form onSubmit={this.submitHandler}>
              <input
              type="text"
              value={this.state.first_name}
              onChange={this.changeHandler}
              placeholder='First Name:'
              name="first_name"/>
              <input
              type="text"
              value={this.state.last_name}
              onChange={this.changeHandler}
              placeholder='Last Name:'
              name="last_name"/>
              <input
              type="text"
              value={this.state.username}
              onChange={this.changeHandler}
              placeholder='User Name:'
              name="username"/>
              <input
              type="text"
              value={this.state.password}
              onChange={this.changeHandler}
              placeholder='Password:'
              name="password"/>
              <input
              type="text"
              value={this.state.email_address}
              onChange={this.changeHandler}
              placeholder='Email Address:'
              name="email_address"/>
            </form>
          </div>
          <button>Sign Up</button>
        </div>

      </React.Fragment>
    )
  }
}

export default Signup