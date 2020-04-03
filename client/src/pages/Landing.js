import React from 'react';
import '../style.css';
import SignOutButton from '../components/SignOut';
import { Link } from "react-router-dom";
import { AuthUserContext } from '../components/Session';

const Landing = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <LandingAuth /> : <LandingNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const LandingNonAuth = () => (
  <div className="background">
    <div className="page-center text-center">
      <h1 className="headline">Making restaurant management simple with Tablify</h1>
      <h3 className="sub-headline">Build your restaurant, manage your menu, and track your customers - all in the palm of your hand.</h3>
      <Link to="/SignIn">
        <button className="login-button">Sign-in</button>
      </Link>
      <Link to="/SignUp">
        <button className="login-button">Sign-up</button>
      </Link>
      <Link to="/FrontDesk">
        <button className="login-button">Front Desk</button>
      </Link>
      <Link to="/Kitchen">
        <button className="login-button">Kitchen</button>
      </Link>
    </div>
  </div>
);

const LandingAuth = () => (
  <div className="background">
  <div className="page-center text-center">
    <h1 className="headline">Making restaurant management simple with Tablify</h1>
    <h3 className="sub-headline">Build your restaurant, manage your menu, and track your customers - all in the palm of your hand.</h3>
    <Link to="/FrontDesk">
      <button className="login-button">Front Desk</button>
    </Link>
    <Link to="/Kitchen">
      <button className="login-button">Kitchen</button>
    </Link>
    <Link to="/Account">
      <button className="login-button">Account</button>
    </Link>
    <SignOutButton />
  </div>
</div>
)


export default Landing;