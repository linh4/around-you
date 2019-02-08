import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import SearchArticle from './ShowArticle/SearchArticle'

const Navbar = (props) => {

  return (
    <>
      <nav>
        <SearchArticle />
        <ul>
          <NavLink activeClassName="selected" exact={true} to="/"><li>Home</li></NavLink>
          <NavLink activeClassName="selected" to="/category"><li>Category</li></NavLink>
          <NavLink activeClassName="selected" to="/sources"><li>Source</li></NavLink>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
