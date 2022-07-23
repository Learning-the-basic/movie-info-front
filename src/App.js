import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./routes/Main";
import Search from "./routes/Search";
import Detail from './routes/Detail';
import RankKofic from './routes/RanckKofic';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';


function App () {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/rank">
          <RankKofic />
        </Route>
        <Route path="/">
          <Main />
        </Route>
        
      </Switch>
      <Footer />
      {/* <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/search" exact={true} component={Search}></Route>
        <Route path="/detail" exact={true} component={Detail}></Route>
      </Switch> */}
    </Router>
  );
};

export default App;
