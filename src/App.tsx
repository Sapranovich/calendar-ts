import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Landing, Login, Logout, NotFound, Main, Modal } from "./pages";
import {userIsAuth} from './redux/actions';


import './scss/style.scss';



function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector( (state: any) => state.authReducer.isAuthenticated );
  React.useEffect(() => {
    dispatch(userIsAuth())
  }, [dispatch]);
  
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
