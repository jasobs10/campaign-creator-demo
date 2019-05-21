import React from 'react';
import './navbar.scss';
import logo from '../../../assets/images/Hyperlocology-Logo.png';
import defaultAvatar from '../../../assets/images/avatar.jpg'

const noMargin = {
  marginRight: 0
};

const NavBar = (props) => (
  <div className="navbar">
    <div className="left">
      <img src={logo} alt="logo"/>
      <div className="nav-element selected">Campaigns</div>
      <div className="nav-element" style={noMargin}>Reporting</div>
    </div>

    <div className="right">
      <div className="user">
        <h1>The Harbor East Group at Morgan Stanley</h1>
        <h2>Sean@harboreastgroup.com</h2>
      </div>
      <img src={defaultAvatar} alt="avatar" />
    </div>
  </div>
)

export default NavBar;