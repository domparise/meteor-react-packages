import React from 'react';

PublicHeader = React.createClass({
  render() {
    var baseUrl = 'http://localhost:3000';
    var navItems = [
      { url:baseUrl+'/', label:'Home'},
      { url:baseUrl+'/about/', label:'About section'}
    ];
    return (
      <nav className="navbar navbar-default" id="navbar-container" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href={FlowRouter.path('login')}>BRAND</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {navItems.map(function (navItem,i) {
              return <li key={i}><a href={navItem.url}>{navItem.label}</a></li>;
            },this)}
          </ul>
        </div>
      </nav>
    );
  }
});