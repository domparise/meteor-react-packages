import React from 'react';

Login = React.createClass({
  componentDidMount () {
    Modules.client.login({ form: "#login" });
  },
  handleSubmit (event) {
    event.preventDefault();
  },
  render () {
    return (
      <div className="row signin-row">
        <div className="col-md-4 signin">
          <form id="login" className="simple_form new_user" onSubmit={this.handleSubmit}>
            <div className="signin-body">
              <div className="signin-title">Log In</div>
              <div className="input email optional user_email">
                <div>
                  <input className="form-control" placeholder="Email Address" type="email" name="emailAddress"/>
                </div>
              </div>
              <label id="emailAddress-error" className="error" htmlFor="emailAddress"></label>
              <div className="input password optional user_password">
                <div>
                  <input className="password form-control" placeholder="Password" type="password" name="password"/>
                </div>
              </div>
              <label id="password-error" className="error" htmlFor="password"></label>
              <div className="input boolean optional user_remember_me">
                <input value="0" type="hidden" name="user[remember_me]"/>
              </div>
              <a href="/recover-password">Forgot password?</a>
              <br/>
            </div>
            <div className="signin-footer">
              <input type="submit" value="Log in" className="btn btn-primary btn-block btn-lg"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
});