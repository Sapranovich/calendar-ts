import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing, Login, Logout, NotFound, Main } from "./pages";
import setAuthToken from "./services/setAuthToken";
import { setAuthUser } from "./redux/actions";
import { IDecodedToken } from "./types/decodedTokenTypes";
import * as CONSTANTS from "./constants";

import "./scss/style.scss";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    //  возможно нужно всю логику перенести в actions redux, services или создать свой хук???
    if (localStorage.accessToken) {
      const decodedToken: IDecodedToken = jwt_decode(localStorage.accessToken);
      const idUser = decodedToken.sub;
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("accessToken");
        setAuthToken(false);
        dispatch(setAuthUser({}));
      } else {
        setAuthToken(localStorage.accessToken);
        axios
          .get(`${CONSTANTS.BACKEND_URL}/data-users/${idUser}`)
          .then((res: any) => dispatch(setAuthUser(res.data)))
          .catch(() => {
            console.log(
              "В данный момент имеются проблеммы с сервером, попробуйдте зайти позже..."
            );
          });
      }
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/calendar" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
