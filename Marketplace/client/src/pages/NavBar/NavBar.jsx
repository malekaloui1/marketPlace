import React from 'react'
import Create from '../Create/Create'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
       <li><Link to="/Create">Create</Link> </li>
    
    </div>
  )
}

export default NavBar