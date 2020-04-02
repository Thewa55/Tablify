import React, { Fragment, Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import FrontDesk from './pages/Frontdesk';
import Kitchen from './pages/Kitchen';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import PasswordForgetPage from './components/PasswordForget';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Landing authUser={this.state.authUser} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/FrontDesk" component={FrontDesk} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/PasswordForget" component={PasswordForgetPage} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Kitchen" component={Kitchen} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
