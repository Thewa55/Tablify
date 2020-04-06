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
        Welcome to the RevenuePage
        <RevenueList />
      </Jumbotron>
    </div>
  )
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);