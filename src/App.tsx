import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Landing, Login, Logout, NotFound, Account } from "./pages";
import { MainWrapper } from "./components";

function App() {
  const isAuth = false;

  return (
    <div className="App">
      <BrowserRouter>
        <MainWrapper>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={!isAuth ? Login : () => <Redirect to="/account" />} />
            <Route path="/account" component={isAuth ? Account : () => <Redirect to="/login" />} />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </MainWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
