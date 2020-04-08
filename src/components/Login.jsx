import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container h-100 text-center">
        <div class="row h-100 justify-content-center align-items-center">
          <form className="col-12 form-signin">
            <img
              className="mb-4"
              src="/docs/4.4/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label forHtml="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autofocus=""
            />
            <br/>
            <label forHtml="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
            />
            <br/>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <Link to="/products">
              <button className="btn btn-lg btn-primary btn-block" type="button">
                Iniciar Sesión
              </button>
            </Link>
            <p className="mt-5 mb-3 text-muted">© 2020-2021</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
