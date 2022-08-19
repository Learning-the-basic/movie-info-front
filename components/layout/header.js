import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header-img"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png"
      />
      <div className="header-button-container">
        <button className="login">로그인</button>
      </div>
    </div>
  )
}

export default Header;
