import React from 'react';
import {mount} from 'react-mounter';

import {Layout} from './layout.jsx';
import {
  Login,
  Signup,
  RecoverPassword,
  ResetPassword
} from './pages/index.jsx';

/*
  Public Routes
*/
const publicRedirect = () => {          //[1] redirect to the main page
  if (Meteor.userId()) {                // if a user is signed in 
    FlowRouter.go('index');             // whenever a user enters one of the following routes [2]
  }
};

let app = FlowRouter.group({
  name: 'public',
  triggersEnter: [publicRedirect]
});


app.route('/signup', {
  name: 'signup',
  action () {
    mount(Layout, { yield: <Signup /> });
  }
});

app.route('/login', {
  name: 'login',
  action () {
    mount(Layout, { yield: <Login /> });
  }
});

app.route('/recover-password', {
  name: 'recover-password',
  action () {
    mount(Layout, { yield: <RecoverPassword /> });
  }
});

app.route('/reset-password/:token', {
  name: 'reset-password',
  action () {
    mount(Layout, { yield: <ResetPassword /> });
  }
});

/*
  Configure the not found page
*/
let NotFound = React.createClass({
  render() {
    return (
      <h1>404 &mdash; Not Found.</h1>
    );
  }
});

FlowRouter.notFound = {
  action() {
    mount( Layout, { yield: <NotFound /> } );
  }
};
