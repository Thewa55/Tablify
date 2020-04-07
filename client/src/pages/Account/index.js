import React from 'react';
import { Link } from "react-router-dom";
import { AuthUserContext, withAuthorization } from '../../components/Session';
import PasswordChangeForm from '../../components/PasswordChange';
import Jumbotron from '../../components/Jumbotron'
import Container from '../../components/Container'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <Container>
          <Jumbotron>
            <div className="row">
              <div className="col-md-12 login-box">
                <h1 className="text-center" style={{fontFamily: "'Fredoka One', cursive", textDecoration: "underline"}}>Account: {authUser.email}</h1>
                <br />
                <PasswordChangeForm />
                <br />
                <div className="text-center">
                  <Link to="/Employees">
                    <button className="login-button">Employees</button>
                  </Link>
                  <Link to="/Revenue">
                    <button className="login-button">Revenue</button>
                  </Link>
                  <Link to="/">
                    <button className="login-button">Home</button>
                  </Link>
                </div>
              </div>
            </div>
          </Jumbotron>
        </Container>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);