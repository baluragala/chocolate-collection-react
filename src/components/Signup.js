import React from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';

class Signup extends React.PureComponent {

  render() {
    return (
      <fieldset className="signup mx-5 mt-2">
        <legend>Sign Up</legend>
        <form>
          <div className="row">
            <div className="col-lg-6 form-group">
              <label htmlFor="first_name">First Name</label>
              <input type="text" className="form-control" id="first_name" placeholder="First Name"/>
            </div>
            <div className="col-lg-6 form-group">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" className="form-control" id="last_name" placeholder="Last Name"/>
            </div>
          </div>
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
          <button type="submit" className="btn btn-primary">Signup</button>
        </form>

        <h5 className="mt-3">Already have an account?. <Link to="/login">Login here</Link></h5>
      </fieldset>
    )
  }
}

export default Signup