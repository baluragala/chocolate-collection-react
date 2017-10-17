import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.PureComponent {
  render() {
    return (
      <fieldset className="signup mx-5 mt-2">
        <legend>Login</legend>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                   placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <h5 className="mt-3">Don't have an account?. <Link to="/signup">Create one</Link></h5>
      </fieldset>)
  }
}

export default Login