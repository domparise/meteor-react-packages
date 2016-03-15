import React from 'react';

Default = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    return {
      loggingIn: Meteor.loggingIn(),
      user: Meteor.user()
    };
  },
    render () {
    // this.props.yield yielded from app-route/routes/{authenticated,public}
    return (
      <div className="app-root">
        <AppHeader />
          <div className="container">
            {this.props.yield}
          </div>
      </div>
    );
    }
});