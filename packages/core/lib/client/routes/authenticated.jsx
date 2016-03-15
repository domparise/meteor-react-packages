// import React from 'react';
// import {mount} from 'react-mounter';
// var mount = Meteor.npmRequire('react-mounter');
/*
  Authenticated Routes
*/
const authenticatedRedirect = () => { // authenticated redirect
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    FlowRouter.go('login');
  }
};

authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [authenticatedRedirect]
});

authenticatedRoutes.route('/', {
  name: 'index',
  action (params, queryParams) {
    mount(Default, { yield: <Dashboard />} );
  }
});

authenticatedRoutes.route( '/settings', {
  name: 'settings',
  action(params, queryParams) {
    mount(Default, { yield: <Settings />} );
  }
});