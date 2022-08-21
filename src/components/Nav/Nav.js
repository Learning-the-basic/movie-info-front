import React, { Component, useState, useEffect  } from 'react';
import './Nav.scss';
import Search from './Search';
import { Link } from "react-router-dom";
import LoginButton from '../user/LoginButton';


const Nav = props => {
  let [clicked, setClicked] = useState(false);

  function handleLogin(e) {
    !clicked ? setClicked(true) : setClicked(false);
  }

    
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-left">
              <Link to="/">
                <img src="/images/watchalogo.png" alt="logo" className='logoImg' />
              </Link>
              <div className="sorts-contents">
                <span>구독</span>
              </div>
            </div>
            <div className="navbar-center">
              <Search />   
            </div>
            <div className="navbar-right">
                { props.authenticated?(
                       <ul>

                             <li>
                                 <a onClick={props.onLogout}>Logout</a>
                             </li>
                       </ul>
                  ): (
                         <LoginButton authenticated={props.authenticated} {...props}>
                         </LoginButton>
                )}

            </div>
          </div>
        </nav>
      </>
    );
 };


export default Nav;