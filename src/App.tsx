import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing, Login, Logout, NotFound, Account } from "./pages";
import { MainWrapper } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainWrapper>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/account" component={Account} />
            <Route component={NotFound} />
          </Switch>
        </MainWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
