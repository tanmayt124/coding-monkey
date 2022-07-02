import React from 'react';
import image1 from './../../assets/logonav.png';

function Footer(){
  return(
    <nav className="navbar bottom navbar-light navbar-expand-sm " style={{backgroundColor: '#2e66bf', marginTop: 10}}>
      <div className="container-fluid">
        <a className="navbar-brand" href='#navbar'> 
          <img src={image1} width={190} height={70} style={{padding: 0}} alt='Coding Monkey'/> 
        </a>      
        <h5 style={{fontFamily: 'Tiro Gurmukhi, serif', color: 'white'}}>Copyright © 2022 Coding_Monkey. All Rights Reserved. </h5>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item" style={{padding: 5}}>
            <a href='https://www.instagram.com/tanmaythakur_1112' style={{color: '#E1306C'}}><i className="fa-brands fa-instagram fa-2x"></i></a>
          </li>
          <li className="nav-item" style={{padding: 5}}>
            <a href='https://discord.com/users/573522786639937537' style={{color: '#02099c'}}><i className="fa-brands fa-discord fa-2x"></i></a>
          </li>
          <li className="nav-item" style={{padding: 5}}>
            <a href='https://github.com/tanmayt124' style={{color: '#404040'}}><i className="fa-brands fa-github fa-2x"></i></a>
          </li>
          <li className="nav-item" style={{padding: 5}}>
            <a href='https://twitter.com/tanmayt124' style={{color: '#2483ff'}}><i className="fa-brands fa-twitter fa-2x"></i></a>
          </li>
          <li className="nav-item" style={{padding: 5}}>
            <a href='https://www.facebook.com/profile.php?id=100009167896362' style={{color: '#003882'}}><i className="fa-brands fa-facebook fa-2x"></i></a>
          </li>
          <li className="nav-item" style={{padding: 5}}>
            <a href='https://www.linkedin.com/in/tanmay-thakur-29b685241/' style={{color: '#006fff'}}><i className="fa-brands fa-linkedin fa-2x"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Footer