import React from "react";

import {Switch, Route} from 'react-router-dom';
import Month from './Month';


function Calendar() {

  return (
    <div className="calendar">
      {/* <div className="calendar__header">
        <button onClick={handlePrevMonthButtonClick} className="button calendar__button">❮</button>
        <h3 className="calendar__title"> {CONSTANTS.MONTH_NAMES[calendarDate.getMonth()]} {calendarDate.getFullYear()}</h3>
        <button onClick={handleNextMonthButtonClick} className="button calendar__button">❯</button>
      </div> */}
      <Switch>
          <Route exact path="/calendar/month" component={Month} />
          {/* <Route exact path="/calendar/segment" component={Calendar} />
          <Route exact path="/calendar/week" component={Calendar} />
          <Route exact path="/calendar/day" component={Calendar} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
    </div>
  );
}

export default Calendar;
