import React from 'react';
import { Switch, Route, useLocation, useRouteMatch } from 'react-router-dom';
import {NotFound} from '../';
 const Account = () =>{
  const location = useLocation();
  const match = useRouteMatch();
  return <div>
     <Switch>
      <Route exact path={`${match.url}`} component={()=> <h2>главная аккаунта</h2>}/>
      <Route exact path={`${match.url}/calendar`} component={()=> <h2>Календарь{location.pathname}</h2>}/>
      <Route exact path={`${match.url}/camunity`} component={()=> <h2>Сообщество</h2>}/>
      <Route component={NotFound}/>
     </Switch>
    </div>
}

export default Account;
