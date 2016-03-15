import React from 'react';

export const AuthenticatedNavigation = React.createClass({
  render () {
    return (
      <div id="navbar-collapse" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-top-links">
          <li>(Dealer Site)</li>
        </ul>
        <ul className="nav navbar-nav navbar-right navbar-top-links">
          <li> <a href={FlowHelpers.pathFor('settings')}>SETTINGS</a></li>
          <li onClick={Meteor.logout}><a href="#">Log Out</a></li> 
        </ul>
      </div>
    );
  }
});
