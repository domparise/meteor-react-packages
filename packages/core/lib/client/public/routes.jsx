import React from 'react';
import {mount} from 'react-mounter';

/*
  Public Routes
*/
const publicRedirect = () => {          //[1] redirect to the main page
  if (Meteor.userId()) {                // if a user is signed in 
    FlowRouter.go('index');             // whenever a user enters one of the following routes [2]
  }
};

publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [publicRedirect]
});


publicRoutes.route('/signup', {
  name: 'signup',
  action () {
    mount(PublicLayout, { yield: <Signup /> });
  }
});

publicRoutes.route('/login', {
  name: 'login',
  action () {
    mount(PublicLayout, { yield: <Login /> });
  }
});

publicRoutes.route('/recover-password', {
  name: 'recover-password',
  action () {
    mount(PublicLayout, { yield: <RecoverPassword /> });
  }
});

publicRoutes.route('/reset-password/:token', {
  name: 'reset-password',
  action () {
    mount(PublicLayout, { yield: <ResetPassword /> });
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
    mount( PublicLayout, { yield: <NotFound /> } );
  }
};
