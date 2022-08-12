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
        <Route path="/search" exact={true} component={Search}></Route>
        <Route path="/:title" exact={true} component={Detail}></Route>
        <Route path="/rank" exact={true} component={RankKofic}></Route>
        <Route path="/" exact={true} component={Main}></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
