import React from "react";
import { Switch, Route } from "react-router-dom";

import Day from "./Day";
import Segment from "./Segment";
import Month from "./Month";


const Calendar = (): JSX.Element => {
  return (
    <div className="calendar">
      <Switch>
        <Route exact path="/calendar" component={Month} />
        <Route exact path="/calendar/segment" component={Segment} />
        <Route exact path="/calendar/day" component={Day} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default Calendar;
