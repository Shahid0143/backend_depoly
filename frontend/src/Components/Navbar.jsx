import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">signup</Link>
        <Link to="/post">post</Link>
    </div>
  )
}

export default Navbar