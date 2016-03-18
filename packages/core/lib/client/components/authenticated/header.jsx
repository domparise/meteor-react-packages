import React from 'react';

AuthenticatedHeader = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    return {
      userId: Meteor.userId(),
      user: Meteor.user(),
      logginIn: Meteor.loggingIn()
    };
  },
  componentDidMount () {
    // Tracker.autorun(() => {
    //   this.forceUpdate();
    //   return Meteor.userId();
    // });
  },
  render() {
    return (
      <nav className="navbar navbar-default" id="navbar-container" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href={FlowRouter.path('index')}>BRAND</a>
          </div>
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right navbar-top-links">
              <li> <a href={FlowRouter.path('settings')}>SETTINGS</a></li>
              <li onClick={Meteor.logout}><a href="#">Log Out</a></li> 
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});