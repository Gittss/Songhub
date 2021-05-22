import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      number: "",
      email: "",
      password: "",
      token: "",
      message: "",
    };
  }

  componentDidMount() {
    if (this.props.location.state == null) {
      this.setState({ message: "Restricted View. Login first." });
    } else {
      axios
        .get(
          `http://localhost:3001/user/getUser/${this.props.location.state.id}`
        )
        .then((res) => {
          if (res.data) {
            const user = res.data;
            this.setState({
              id: user.id,
              name: user.name,
              number: user.number,
              email: user.email,
              password: user.password,
              token: user.token,
            });
          } else this.setState({ name: "Not found" });
        });
    }
  }

  render() {
    if (this.state.message) {
      return (
        <div className="w-100 text-danger" style={{ height: "100vh" }}>
          <h1>{this.state.message}</h1>
          <Link to="/">
            <button className="btn btn-danger">Login/Signin</button>
          </Link>
        </div>
      );
    }
    return (
      <div className="container py-5">
        <h2>Hi {this.state.name}</h2>
        <div className="col-3 float-end">
          <Link to="/">
            <button className="btn btn-primary">Logout</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
