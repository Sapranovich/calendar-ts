import React from "react";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {setAuthUser} from '../../redux/actions';
import setAuthToken from "../../services/setAuthToken";
const Logout = ({history}:RouteComponentProps<any>) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    localStorage.removeItem("accessToken");
    setAuthToken(false);
    dispatch(setAuthUser({}));
    history.push("/login");
  }, []);
  return null;
};

export default withRouter(Logout);
