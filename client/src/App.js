import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import FrontDesk from './pages/Frontdesk';
import Kitchen from './pages/Kitchen';
// import SignIn from "./components/SignIn"
// import SignUp from "./components/SignUp"

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Landing} />
        <Route exact path="/FrontDesk" component={FrontDesk} />
        {/* <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} /> */}
        <Route exact path="/Kitchen" component={Kitchen} />
      </Fragment>
    </Router>
  );
}

export default App;
