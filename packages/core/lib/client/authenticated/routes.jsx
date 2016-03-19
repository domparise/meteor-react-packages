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

let app = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [authenticatedRedirect]
});

app.route('/', {
  name: 'index',
  action (params, queryParams) {
    mount(Layout, { yield: <Dashboard />} );
  }
});

app.route( '/settings', {
  name: 'settings',
  action(params, queryParams) {
    mount(Layout, { yield: <Settings />} );
  }
});