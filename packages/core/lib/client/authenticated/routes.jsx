import React from 'react';
import {mount} from 'react-mounter';

import {Layout} from './layout.jsx';
import {
  Dashboard,
  Settings,
} from './pages/index.jsx';

/*
  Authenticated Routes
*/
const authenticatedRedirect = () => { // authenticated redirect
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    FlowRouter.go('login');
  }
};

let routes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [authenticatedRedirect]
});

routes.route('/', {
  name: 'index',
  action (params, queryParams) {
    mount(Layout, { yield: <Dashboard />} );
  }
});

routes.route( '/settings', {
  name: 'settings',
  action(params, queryParams) {
    mount(Layout, { yield: <Settings />} );
  }
});