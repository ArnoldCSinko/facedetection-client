import React, { Component } from "react";
import Error from "../Error";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: { isError: false, message: "" }
    };
  }

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: { isError: false, message: "" }
    });
  };

  onSubmitSignin = () => {
    if (this.state.email !== "" && this.state.password !== "") {
      fetch("http://localhost:3000/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(response => {
          if (response.status !== 400) {
            return response.json();
          } else {
            return false;
          }
        })
        .then(user => {
          if (user) {
            this.props.loadUser(user);
            this.props.onRouteChange("home");
          } else {
            this.setState({
              error: { isError: true, message: "Invalid credentials" }
            });
          }
        });
    } else {
      this.setState({
        error: { isError: true, message: "Enter email and password!" }
      });
    }
  };

  render() {
    const { onRouteChange } = this.props;
    const { error } = this.state;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 shadow-5 mw6 center">
        <main className="pa4 black-80">
          <div className="measure w-100 mw5">
            <Error isError={error.isError} message={error.message} />
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="center f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email"
                  id="email-address"
                  onChange={this.onInputChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onInputChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib shadow-5"
                type="submit"
                value="Sign in"
                onClick={this.onSubmitSignin}
              />
            </div>
            <div className="lh-copy mt3">
              <a
                onClick={() => onRouteChange("register")}
                href="#0"
                className="f6 link dim black db"
              >
                Register
              </a>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
