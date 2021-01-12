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
      <div className="not-found__title">NotFound</div>
      <div className="not-found__image"></div>
      <div className="not-found__discription">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, hic
        animi et aliquam fugit inventore, distinctio repellendus accusantium
        rerum dolorem amet voluptas tenetur vel quasi commodi impedit sequi
        quibusdam quas?
      </div>
      <button className="not-found__button" onClick={handleRedirectButtonClick}>
        На главную
      </button>
    </div>
  );
};

export default NotFound;
