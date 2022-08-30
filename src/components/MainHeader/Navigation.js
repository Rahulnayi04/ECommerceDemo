import React, { Fragment, useState } from 'react';
import classes from './Navigation.module.css';
import Menu from './Menu';

const Navigation = (props) => {
  const [menuIsOpen, setMenuOpen] = useState(false)
  const ToggleMenu = (isMenuOpen) => {
    setMenuOpen(isMenuOpen)
  }
  const closeMenu = ()=>{
    setMenuOpen(false)
  }

  return (
    <div>
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <button onClick={(e) => ToggleMenu(true)}>Menu</button>
          </li>
        )}
        
        {props.isLoggedIn && (
          <li>
            <div onClick={closeMenu}>
            <button onClick={props.onLogout} >Logout</button>
            </div>
          </li>
        )}
      </ul>
    </nav>
    {menuIsOpen ? <Menu onMenuCloseClick={(e) => ToggleMenu(false)} />: null}
    </div>
  );
};

export default Navigation;
