import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Homepage from './Homepage'
import Userhome from './Userhome'
import Goal from './Goal'
import Addgoal from './Addgoal'
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="homepagecontainer">
        <Route exact path="/" component={Homepage} />
      </div>
      <div className="signuppage">
        <Route path="/signup" component={Signup} />
        <Route path="/signup" component={Login} />
      </div>
      <div>
        <Route exact path="/user/:id" component={Userhome} />
      </div>
      <div>
        <Route exact path="/user/:id/:goalid" component={Goal} />
      </div>
      <div>
        <Route path="/user/:id/addgoal" component={Addgoal}/>
      </div>
    </React.Fragment>
  )
}

export default App
