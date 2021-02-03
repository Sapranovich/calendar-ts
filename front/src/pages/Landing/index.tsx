import React from "react";
import { Link } from "react-router-dom";

const Landing = (): JSX.Element => {
  return (
    <div className="landing">
      <div className="wrapper">
        <div className="landing__wrapper">
          <div className="landing__group">
          <h1 className='landing__title'>Calendar</h1>
            <Link to="/calendar" className="button button__add">
              get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
