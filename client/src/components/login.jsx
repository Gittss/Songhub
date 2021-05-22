import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      redirectToView: false,
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .get(`http://localhost:3001/user/getUserByEmail/${this.state.email}`)
      .then((res) => {
        if (res.data[0]) {
          axios
            .post(`http://localhost:3001/user/login`, user, {
              headers: {
                authorization: `token ${res.data[0].token}`,
              },
            })
            .then((res) => {
              if (res.data === "Incorrect password") {
                this.setState({ email: "Incorrect password" });
              } else this.setState({ id: res.data._id, redirectToView: true });
            });
        } else this.setState({ email: "Not found" });
      });
  }

  render() {
    const redirectToView = this.state.redirectToView;
    if (redirectToView) {
      return (
        <Redirect
          to={{
            pathname: "/home",
            state: { id: this.state.id },
          }}
        />
      );
    } else {
      return (
        <div
          className="row w-100 mx-auto justify-content-center py-5 bg-dark text-light"
          style={{ height: "100vh" }}
        >
          <div className="col-md-6 col-sm">
            <h3>Login</h3>
            <form className="border p-5" onSubmit={this.onSubmit}>
              <div className="form-group p-2">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  required
                />
              </div>
              <div className="form-group p-2">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary p-2"
                value="Submit"
              ></input>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Login;
