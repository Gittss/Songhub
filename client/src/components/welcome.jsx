import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="bg-dark text-light" style={{ height: "100vh" }}>
      <h1>Welcome to SongHub</h1>
      <div className="row w-100 mx-auto justify-content-center py-5">
        <div className="col-3">
          <Link to="/signin">
            <button className="btn btn-primary p-2">Signin</button>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/login">
            <button className="btn btn-primary p-2">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
