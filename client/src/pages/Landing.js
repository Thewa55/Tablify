import React from 'react';
import '../style.css';

function Landing() {
  return (
    <div className="background">
        <div className="page-center text-center">
            <h1 className="headline">Making restaurant management simple with Tablify</h1>
            <h3 className="sub-headline">Build your restaurant, manage your menu, and track your customers - all in the palm of your hand.</h3>
            <button className="login-button">Log-in</button>
            <button className="login-button">Sign-up</button>
        </div>
    </div>
  );
}

export default Landing;