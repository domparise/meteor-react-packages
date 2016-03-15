// var React = Npm.require('react');

Dashboard = React.createClass({
  render() {
    return (
      <div id='dashboard'>
        <div id='dealer-head' className='row'>
          <div className='col-md-8'>
            <div>John Smith / Ford of Ann Arbor</div>
            <div>919-222-3333 / 319 W. CarMaker Dr.</div>
          </div>
          <div className='col-md-4'>
            <button className='btn pull-right'>Launch Configurator</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            CURRENT ORDERS
          </div>
          <div className='col-md-4'>
            ACTIVE CONFIGURATIONS
          </div>
        </div>
      </div>
    );
  }
});