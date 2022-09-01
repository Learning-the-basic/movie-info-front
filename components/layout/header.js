import React from "react";
import { useSetRecoilState } from "recoil";
import { defaultPopupOpen } from "../../atom";
import SearchBar from "./searchBar";
import Link from 'next/link'

const Header = () => {
  const setLoginPopup = useSetRecoilState(defaultPopupOpen);
  return (
    <div className="header">
      <Link href={'/'}>
        <img
          className="header-img"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png"
        />
      </Link>
      <SearchBar/>
      <div className="header-button-container">
        <button className="login" onClick={() => setLoginPopup('login')}>로그인</button>
        <button className="login" onClick={() => setLoginPopup('join')}>회원가입</button>
      </div>
    </div>
  )
}

export default Header;
