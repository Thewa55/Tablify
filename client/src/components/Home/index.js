import React from 'react';
import { compose } from 'recompose';

import { withAuthorization,
   } from '../Session';

const HomePage = () => (
  <div>
    <h1>Protected Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>

  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
)(HomePage);
