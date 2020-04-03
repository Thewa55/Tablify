import React from 'react';
import { AuthUserContext, withAuthorization } from '../../components/Session';
import { PasswordForgetForm } from '../../components/PasswordForget';
import PasswordChangeForm from '../../components/PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);