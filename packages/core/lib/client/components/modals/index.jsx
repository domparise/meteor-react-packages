// var React = Npm.require('react');

AddStudyModal = React.createClass({
  render() {
    return (
      <div className='modal fade' id='_modal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <i className='fa fa-close pull-right modal-close'></i>
              <h3 className='modal-title'>Add Study</h3>
            </div>
            <div className='modal-body'>
              <div className='form-group'>
                <label className='col-sm-2'>Title</label>
                <div className='col-sm-10'>
                  <input className='form-control' name='title' type='text'/>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button className='btn btn-add btn-labeled fa fa-plus pull-left'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});