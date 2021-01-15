import React from "react";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import setAuthToken from "./services/setAuthToken";
import { setAuthUser } from "./redux/actions";
import { IAuthUser, IDecodedToken } from "./components/SignInForm";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { MainWrapper } from "./components";
import { Landing, Login, Logout, NotFound, Account } from "./pages";

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
        <MainWrapper>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/login"
              component={() =>
                !isAuthenticated ? <Login /> : <Redirect to="/calendar" />
              }
            />
            <Route
              path="/calendar"
              component={() =>
                isAuthenticated ? <Account /> : <Redirect to="/login" />
              }
            />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </MainWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
