import React from 'react'
import './navbar.scss'
export default function navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logoContainer'>
        <img className="navbar__logo"src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png?20070323032439"></img>
      </div>
      <div className='navbar__menu'>
        <ul className='navbar__menu__list'>
          <li className='navbar__menu__list__item'>Home</li>
          <li className='navbar__menu__list__item'>About</li>
          <li className='navbar__menu__list__item'>Services</li>
          <li className='navbar__menu__list__item'>Contact</li>
        </ul>
      </div>
    </div>
    )
}
