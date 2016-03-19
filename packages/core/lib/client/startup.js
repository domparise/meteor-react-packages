Meteor.startup(() => {
  console.log('yolo');


  /*
    authenticated routing 
  */
  Accounts.onLogin(() => { // when user logs in, route them to whatever route they log in with
    let currentRoute = FlowRouter.current();
    if (currentRoute && currentRoute.route.group.name === 'public') {
        FlowRouter.go('index');
    } else {
      // [#1] route elsewhere if logged in to another route
    }
  });

  // if user isnt logged in and tries to reach an auth'd path, redirect to login
  Tracker.autorun( () => {
    if (!Meteor.userId() && FlowRouter.current().route.group.name === 'authenticated') {
      FlowRouter.go('login');
    }
  });

  
});