import React from "react";

const Welcome = () => {
  return (
    <div className="bg-dark text-light" style={{ height: "100vh" }}>
      <h1>Welcome to SongHub</h1>
      <div className="row w-100 mx-auto justify-content-center py-5">
        <div className="col-md-6 col-sm">
          <h3>Login</h3>
          <form className="border p-5">
            <div className="form-group p-2">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
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
              />
            </div>
            <button type="submit" className="btn btn-primary p-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
