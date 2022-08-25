import React from "react";
import Header from "./header";
import Footer from "./footer";
import DefaultPopup from "../popup/defaultPopup";
import Login from "../form/login";
import { useRecoilValue } from "recoil";
import { defaultPopupOpen } from "../../atom";

const Layout = ({ children }) => {
  const openPopup = useRecoilValue(defaultPopupOpen);

  return (
    <div className="movie-container">
      <Header/>
        <div className="movie-main">
          { children }
        </div>
      <Footer/>
      {openPopup === 'login' &&
        <DefaultPopup title={'로그인'}>
          <Login/>
        </DefaultPopup>
      }
      {openPopup === 'join' &&
        <DefaultPopup title={'회원가입'}>
          회원가입
        </DefaultPopup>
      }
    </div>
  )
}

export default Layout;
