import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
//import About from './About.jsx';

function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <Link to='/' >


        <div className='title'>
          <img id="logoHenry" src={Logo} width="30" height="30" className="logo" alt="" />
          <h1>Henry - Weather App</h1>
        </div>

      </Link>
      
      <Link to='/about' className='about'>
        <span className='aboutspan'>About</span>
      </Link>

      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
