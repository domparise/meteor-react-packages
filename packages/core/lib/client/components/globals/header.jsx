import React from 'react';
import {AuthenticatedNavigation} from './authenticated-navigation.jsx';
import {PublicNavigation} from './public-navigation.jsx';

export const AppHeader = React.createClass({
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
            <a className="navbar-brand" href={(!this.data.loggingIn && !this.data.userId) ? FlowRouter.path('login') : FlowRouter.path('index')}>ROUSH</a>
          </div>
          {this.data.userId ? <AuthenticatedNavigation /> : <PublicNavigation />}
        </div>
      </nav>
    );
  }
});
