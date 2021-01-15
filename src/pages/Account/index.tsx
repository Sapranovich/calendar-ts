import React from "react";
import { Switch, Route, useLocation, useRouteMatch } from "react-router-dom";
import { NotFound } from "../";
import { MainWrapper, Calendar, WeekList, DayList } from "../../components";

const Account = () => {
  const location = useLocation();
  const match = useRouteMatch();
  return (
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={Calendar}
        />
        <Route exact path={`${match.url}/week/:idSelectedWeek`} component={WeekList} />
        <Route
        exact
          path={`${match.url}/day/:idSelectedDate`}
          component={DayList}
        />
        <Route component={NotFound} />
      </Switch>
  );
};

export default Account;
