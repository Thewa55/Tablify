import React, { Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import FrontDesk from './pages/Frontdesk';
import Kitchen from './pages/Kitchen';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import PasswordForgetPage from './components/PasswordForget';
import { withFirebase } from "../src/components/Firebase";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }
  
  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" render={()=> <Landing authUser={this.state.authUser} />} />
          <Route exact path="/FrontDesk" component={FrontDesk} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/pw-forget" component={PasswordForgetPage} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Kitchen" component={Kitchen} />
        </Fragment>
      </Router>
    );
  }
}

export default withFirebase(App);
