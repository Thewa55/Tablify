import React from 'react';
import { AuthUserContext, withAuthorization } from '../../components/Session';
import Jumbotron from '../../components/Jumbotron'
import RevenueList from '../../components/RevenueList'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <RevenuePage />
    )}
  </AuthUserContext.Consumer>
);

function RevenuePage() {
  


  return(
    <div>
      <Jumbotron>
        <div className="row">
          <div className="col-md-12 login-box">
            <h1 style={{fontFamily: "'Fredoka One', cursive", textDecoration: "underline", marginLeft: "1%"}}>Revenue Tracking</h1>
            <RevenueList />
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);