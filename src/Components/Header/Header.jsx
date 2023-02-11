import React from 'react'
import logo from "../../logo.png"
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt=""/>
        <div>
          <Link to="/">Home</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recently-added">Recently Added</Link>
          <Link to="/my-list">My List</Link>
        </div>
        <ImSearch/>
      </nav>
    </div>
  )
}

export default Header
