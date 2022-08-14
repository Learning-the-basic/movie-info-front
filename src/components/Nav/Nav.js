import React, { Component } from 'react';
import './Nav.scss';
import Search from './Search';
import { Link } from "react-router-dom";

export default class Nav extends Component {
  
  
  render() {
    
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
              <div className="btn-container">
                <button className="btn-login">로그인</button>
                <button className="btn-signup">회원가입</button>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

