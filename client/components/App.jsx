import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <h1>ASPIRE.</h1>
      <div className="homepagecontainer">
        <Route path="/" component={Signup} />
        <Route path="/" component={Login} />
      </div>
    </React.Fragment>
  )
}

export default App

{/* <Route path="/" components={{Login, Signup}} /> */}