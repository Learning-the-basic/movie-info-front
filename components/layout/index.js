import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="movie-container">
      <Header/>
      { children }
      <Footer/>
    </div>
  )
}

export default Layout;
