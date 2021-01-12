import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Landing, Login, Logout, NotFound, Account } from "./pages";
import { MainWrapper } from "./components";
import { Provider } from "react-redux";
import store from "./redux";

function App() {
  const isAuth = false;

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainWrapper>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={!isAuth ? Login : () => <Redirect to="/account" />} />
              <Route exact path="/account" component={isAuth ? Account : () => <Redirect to="/login" />} />
              <Route exact path="/logout" component={Logout} />
              <Route component={NotFound} />
            </Switch>
          </MainWrapper>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
