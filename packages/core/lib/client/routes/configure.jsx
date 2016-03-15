// import React from 'react';
// import {mount} from 'react-mounter';

// var mount = Meteor.npmRequire('react-mounter');
/*
  Router Config
*/
FlowRouter.notFound = {
  action() {
    mount( Default, { yield: <NotFound /> } );
  }
};

Accounts.onLogin(() => {
  let currentRoute = FlowRouter.current();
  console.log(currentRoute);
  if (currentRoute && currentRoute.route.group.name === 'public') {
      FlowRouter.go('index');
  } else {
    // [#1] route elsewhere if logged in to another route
  }
});

if (Meteor.isClient) {
  Tracker.autorun( () => {
    if (!Meteor.userId() && FlowRouter.current().route) {
      FlowRouter.go('login');
    }
  });
}
