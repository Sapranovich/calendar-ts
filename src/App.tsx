import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Landing, Login, Logout, NotFound, Account } from "./pages";

import jwt_decode from "jwt-decode";
import setAuthToken from "./services/setAuthToken";
import { setAuthUser } from "./redux/actions";
import { IAuthUser, IDecodedToken } from "./components/SignInForm";



function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: any) => state.authReducer.isAuthenticated
  );

  React.useEffect(() => {
    if (localStorage.accessToken) {
      const decodedToken: IDecodedToken = jwt_decode(localStorage.accessToken);
      const currentTime = Date.now() / 1000;
      // decodedToken.exp < currentTime
      if (false) {
      } else {
        setAuthToken(localStorage.accessToken);
        const user: IAuthUser = {
          email: decodedToken.email,
          sub: decodedToken.sub,
        };
        dispatch(setAuthUser(user));
      }
    }
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/calendar" component={() => isAuthenticated ? <Account /> : <Redirect to="/login" /> } />
            <Route exact path="/login" component={() => !isAuthenticated ? <Login /> : <Redirect to="/calendar" />} />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
