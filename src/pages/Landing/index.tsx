import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      Landing
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Landing;
