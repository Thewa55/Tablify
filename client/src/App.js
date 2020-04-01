import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import FrontDesk from './pages/Frontdesk';
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
      </Fragment>
    </Router>
  );
}

export default App;
