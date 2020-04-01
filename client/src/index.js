import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FrontDesk from './pages/Frontdesk';
// import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseContext.Provider value={new Firebase()}> */}
      <FrontDesk />
    {/* </FirebaseContext.Provider>, */}
  </React.StrictMode>,
  document.getElementById('root')
);

