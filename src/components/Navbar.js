import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
      <h1>Navbar Component</h1>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/category"><li>Category</li></Link>
        <Link to="/sources"><li>Source</li></Link>
      </ul>
    </div>
  )
}

export default Navbar;
