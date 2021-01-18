import React from "react";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {setAuthUser} from '../../redux/actions';
import setAuthToken from "../../services/setAuthToken";
const Logout = ({history}:RouteComponentProps<any>) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    localStorage.removeItem("accessToken");
    setAuthToken(false);
    dispatch(setAuthUser({}));
    history.push("/");
  }, [dispatch, history]);
  return null;
};

export default withRouter(Logout);
