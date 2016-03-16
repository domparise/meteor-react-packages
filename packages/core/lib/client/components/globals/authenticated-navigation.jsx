import React from 'react';

AuthenticatedNavigation = React.createClass({
  render () {
    return (
      <div id="navbar-collapse" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right navbar-top-links">
          <li> <a href={FlowRouter.path('settings')}>SETTINGS</a></li>
          <li onClick={Meteor.logout}><a href="#">Log Out</a></li> 
        </ul>
      </div>
    );
  }
});