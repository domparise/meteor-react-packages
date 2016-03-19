import React from 'react';

let Header = React.createClass({
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

export const Layout = React.createClass({
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
        <Header />
        <div className="container">
          {this.props.yield}
        </div>
      </div>
    );
    }
});