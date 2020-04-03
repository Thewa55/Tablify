import React from 'react';
import { AuthUserContext, withAuthorization } from '../../components/Session';
import Jumbotron from '../../components/Jumbotron'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <EmployeePage />
    )}
  </AuthUserContext.Consumer>
);

function EmployeePage() {
  
  return(
    <div>
      <Jumbotron>
      Welcome to the EmployeePage
      </Jumbotron>
    </div>
  )
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);