let recoverPassword = ( options ) => {
  _validate( options.form );
};

let _validate = ( form ) => {
  $( form ).validate( validation() );
};

let validation = () => {
  return {
    rules: {
      emailAddress: {
        required: true,
        email: true
      }
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      }
    },
    submitHandler() { _handleRecovery(); }
  };
};

let _handleRecovery = ( template ) => {
  let email = $( '[name="emailAddress"]' ).val();

  Accounts.forgotPassword( { email: email }, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'warning' );
    } else {
      Bert.alert( 'Check your inbox for a reset link!', 'success' );
    }
  });
};


import React from 'react';

export const RecoverPassword = React.createClass({
  componentDidMount() {
    recoverPassword({ form: "#recover-password" });
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h4 className="page-header">Recover Password</h4>
          <form id="recover-password" className="recover-password" onSubmit={this.handleSubmit}>
            <p className="alert alert-info">Enter your email address below to receive a link to reset your password.</p>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" name="emailAddress" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Recover Password" />
            </div>
          </form>
        </div>
      </div>
    );
  }
});