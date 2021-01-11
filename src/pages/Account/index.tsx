import React from 'react';
import { Switch, Route, useLocation, useRouteMatch } from 'react-router-dom';

const Account = () =>{
  const location = useLocation();
  let match = useRouteMatch();
  return <div>
     <Switch>
      <Route exact path={`${match.url}`} component={()=> <h2>главная аккаунта</h2>}/>
      <Route exact path={`${match.url}/calendar`} component={()=> <h2>Календарь{location.pathname}</h2>}/>
      <Route exact path={`${match.url}/camunity`} component={()=> <h2>Сообщество</h2>}/>
      <Route component={()=> <h2>нет такой страницы</h2>}/>
     </Switch>
    </div>
}

export default Account;
