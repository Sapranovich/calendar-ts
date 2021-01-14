import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from "react-router-dom";

import { Landing, Login, Logout, NotFound, Account } from "./pages";

function App() {
  const isAuthenticated = useSelector((state: any) => state.authReducer.isAuthenticated);

  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={()=> !isAuthenticated ? <Login /> : <Redirect to="/calendar" />} />
              <Route path="/calendar" component={()=> isAuthenticated ? <Account/> : <Redirect to="/login" />} />
              <Route exact path="/logout" component={Logout} />
              <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
