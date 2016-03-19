import React from 'react';

export const Dashboard = React.createClass({
  render() {
    return (
      <div id='dashboard'>
        <div className='row'>
          <div className='col-md-8'>
            Information
          </div>
          <div className='col-md-4'>
            Other stuff
          </div>
        </div>
      </div>
    );
  }
});