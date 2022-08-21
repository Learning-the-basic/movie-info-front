import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./routes/Main";
import Search from './components/Nav/Search';
import Detail from './routes/Detail';
import Nav from './components/Nav/Nav';
import OAuth2RedirectHandler from './components/user/OAuth2RedirectHandler';
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants/constants';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          authenticated: false,
          currentUser: null,
          loading: true
        }
        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    loadCurrentlyLoggedInUser() {
      getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });
      });
    }

    handleLogout() {
      localStorage.removeItem(ACCESS_TOKEN);
      this.setState({
        authenticated: false,
        currentUser: null
      });
    }

    componentDidMount() {
      this.loadCurrentlyLoggedInUser();
    }


    render() {

          return (
            <div>
              <Nav authenticated={this.state.authenticated} onLogout={this.handleLogout} />
              <Switch>
                <Route path="/search" exact={true} component={Search}></Route>
                <Route path="/:title" exact={true} component={Detail}></Route>
                {/* <Route path="/rank" exact={true} component={RankKofic}></Route> */}
                <Route path="/" exact={true} component={Main}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}>
            </Route>
              </Switch>
            </div>
          );
    }
}
export default App;
