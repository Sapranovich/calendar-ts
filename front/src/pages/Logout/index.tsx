import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAuthUser } from "../../redux/actions";
import setAuthToken from "../../services/setAuthToken";

const Logout = (): JSX.Element => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.removeItem("accessToken");
    setAuthToken(false);
    dispatch(setAuthUser({}));
  }, [dispatch]);

  return <Redirect exact to="/" />;
};

export default Logout;
