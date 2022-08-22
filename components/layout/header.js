import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <div className="header">
      <Link href={'/'}>
        <img
          className="header-img"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png"
        />
      </Link>
      <div className="header-button-container">
        <button className="login">로그인</button>
      </div>
    </div>
  )
}

export default Header;
