import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Landing, Login, Logout, NotFound, Main, Modal } from "./pages";
import {setAuthUser} from './redux/actions';
import setAuthToken from './services/setAuthToken';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {IDecodedToken} from './types/decodedTokenTypes';
import './scss/style.scss';
const URL_DB = "http://localhost:3001";


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector( (state: any) => state.authReducer.isAuthenticated );
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
          .get(`${URL_DB}/data-users/${idUser}`)
          .then((res: any) => dispatch(setAuthUser(res.data)))
          .catch((err) => {
            // localStorage.removeItem("accessToken");
            // setAuthToken(false);
            // dispatch(setAuthUser({}));
          });
      }
    }

  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/calendar" component={() => isAuthenticated ? <Main /> : <Redirect to="/login" /> } />
            <Route exact path="/login" component={() => !isAuthenticated ? <Login /> : <Redirect to="/calendar" />} />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
