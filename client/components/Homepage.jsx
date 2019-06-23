import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <React.Fragment>
    <div>
      <h1>Aspire.</h1>
      <div>
        <p>Will you follow your dreams?</p>
        <button><Link to={"/signup"}>Enter</Link></button>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Homepage