import React, {useEffect, useState, useRef} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {defaultPopup, userToken} from "../../atom";
import Search from "./search";
import Link from 'next/link'

const Header = () => {
  const [popup, setLoginPopup] = useRecoilState(defaultPopup);
  const [isToken, setIsToken] = useRecoilState(userToken);

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (token) {
      setIsToken(token);
    }
  }, [])

  return (
    <div className="header">
      <Link href={'/'}>
        <img
          className="header-img"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png"
        />
      </Link>
      <Search/>
      <div className="header-button-container">
        {isToken !== '' ?
          (
            <button
              className="login"
              onClick={() => {
                localStorage.removeItem('user_token');
                setIsToken('')
              }}
            >
              로그아웃
            </button>
          )
          :
          (
            <>
              <button className="login" onClick={() => setLoginPopup('login')}>로그인</button>
              <button className="login" onClick={() => setLoginPopup('join')}>회원가입</button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Header;
