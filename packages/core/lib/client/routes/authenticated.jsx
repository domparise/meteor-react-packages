import React from 'react';
import {mount} from 'react-mounter';

import {Dashboard} from '../components/authenticated/dashboard.jsx';
import {PageContainer} from '../components/authenticated/page-container.jsx';
import {Settings} from '../components/authenticated/settings.jsx';

const authenticatedRedirect = () => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    FlowRouter.go('login');
  }
};

const authenticatedRoutes = FlowRouter.group({
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