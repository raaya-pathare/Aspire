import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'


class Userhome extends React.Component {

  render () {
    return (
      <>
      <Nav />
       <h1>Hello User</h1>
       <div className="userhomecontainer">
          <div className="ongoinggoals">
            <p>In Progress:</p>
            <div className="indivgoals">
              <p><Link to={"/user/:id/:goalid"}>Goal One</Link></p>
            </div>
            <div>
              <button><Link to={"/user/:id/addgoal"}>Add Goal</Link></button>
            </div>
          </div>
          <div className="completedgoals">
            <p>Completed:</p>
            <div className="indivcompletedgoals">
              <p><Link to={"/user/:id/:goalid"}>Goal One</Link></p>
            </div>
          </div>
          <div className="profileside">
            <image src=""></image>
            <p>Who you are and why you're here.</p>
            <p>You have { '' } goals in progress.</p>
            <p>You have completed { '' } goals since joining Aspire.</p>
          </div>
       </div>
      </>
    )
  }
}

export default Userhome

{/* <Route path="/user/:id/home" component={Userhome}/> */}
