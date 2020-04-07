import React from 'react';
import { AuthUserContext, withAuthorization } from '../../components/Session';
import Jumbotron from '../../components/Jumbotron';
import EmployeeList from '../../components/EmployeeList';

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
        <div className="row">
          <div className="col-md-12 login-box">
            <h1 style={{fontFamily: "'Fredoka One', cursive", textDecoration: "underline", marginBottom: "2%"}}>Welcome to the Employee Page</h1>
            <EmployeeList />
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);