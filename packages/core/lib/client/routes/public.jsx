// import React from 'react';
// import {mount} from 'react-mounter';

// var mount = Meteor.npmRequire('react-mounter');

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

// publicRoutes.route('/', {
//   name: 'index',
//   action (params, queryParams) {
//     mount(Default, { yield: <Dashboard />} );
//   }
// });

publicRoutes.route('/signup', {
  name: 'signup',
  action () {
    mount(Default, { yield: <Signup /> });
  }
});

publicRoutes.route('/login', {
  name: 'login',
  action () {
    mount(Default, { yield: <Login /> });
  }
});

publicRoutes.route('/recover-password', {
  name: 'recover-password',
  action () {
    mount(Default, { yield: <RecoverPassword /> });
  }
});

publicRoutes.route('/reset-password/:token', {
  name: 'reset-password',
  action () {
    mount(Default, { yield: <ResetPassword /> });
  }
});
