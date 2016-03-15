// var React = Npm.require('react');

PublicNavigation = React.createClass({
  render() {
    var baseUrl = 'http://localhost:3000';
    var navItems = [
      { url:baseUrl+'/', label:'Home'},
      { url:baseUrl+'/about/', label:'About section'}
    ];
    return (
      <ul className="nav navbar-nav navbar-right">
        {navItems.map(function (navItem,i) {
          return <li key={i}><a href={navItem.url}>{navItem.label}</a></li>;
        },this)}
      </ul>
    );
  }
});