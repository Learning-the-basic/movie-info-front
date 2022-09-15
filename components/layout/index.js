import React from "react";
import Header from "./header";
import Footer from "./footer";
import DefaultPopup from "../popup/defaultPopup";
import Login from "../form/login";
import { useRecoilValue } from "recoil";
import { defaultPopup } from "../../atom";
import Join from "../form/join";

const Layout = ({ children }) => {
  const openPopup = useRecoilValue(defaultPopup);

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
          <Join/>
        </DefaultPopup>
      }
    </div>
  )
}

export default Layout;
