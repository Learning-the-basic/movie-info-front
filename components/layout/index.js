import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="movie-container">
      <Header/>
        <div className="movie-main">
          { children }
        </div>
      <Footer/>
    </div>
  )
}

export default Layout;
