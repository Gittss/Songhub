import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      id: "",
      name: "",
      number: "",
      email: "",
      password: "",
      redirectToView: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeNumber(e) {
    this.setState({
      number: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post("http://localhost:3001/user/signin", user).then((res) => {
      this.setState({ id: res.data._id, redirectToView: true });
    });
  }

  render() {
    const redirectToView = this.state.redirectToView;
    if (redirectToView) {
      console.log("id at signin.jsx : " + this.state.id);
      return (
        <Redirect
          to={{
            pathname: "/home",
            state: { id: this.state.id },
          }}
        />
      );
    } else
      return (
        <div
          className="row w-100 mx-auto justify-content-center py-5 bg-dark text-light"
          style={{ height: "100vh" }}
        >
          <div className="col-md-6 col-sm">
            <h3>Signin</h3>
            <form className="border p-5" onSubmit={this.onSubmit}>
              <div className="form-group p-2">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  required
                />
              </div>

              <div className="form-group p-2">
                <label for="exampleInputEmail1">Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter number"
                  value={this.state.number}
                  onChange={this.onChangeNumber}
                />
              </div>

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
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
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

export default Signin;
