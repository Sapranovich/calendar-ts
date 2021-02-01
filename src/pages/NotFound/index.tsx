import React from "react";
import { Redirect } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
const NotFound = () => {
  const [redirect, setRedirect] = React.useState(false);
  const match = useRouteMatch();

  const handleRedirectButtonClick = () => {
    setRedirect(true);
  };

  return redirect ? (
    <Redirect exact to={match.url} />
  ) : (
    <div className="not-found">
      <div className="wrapper">
        <div className="not-found__wrapper">
          <h2 className="not-found__title">NotFound</h2>
          <button
            className="button button__add"
            onClick={handleRedirectButtonClick}
          >
            to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
