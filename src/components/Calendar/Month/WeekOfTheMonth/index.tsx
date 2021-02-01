import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { InitialStateDataType } from "../../../../redux/calendar/calendarReducers";
import DayOfTheWeek from "../DayOfTheWeek";

export interface WeekOfTheMonthPropTypes extends RouteComponentProps<any> {
  weekData: InitialStateDataType[];
  weekNumber: number;
}

const WeekOfTheMonth = ({ weekData, weekNumber }: WeekOfTheMonthPropTypes) => {
  return (
    <div key={weekNumber} className="month-list__week border_bottom">
      {weekData.map((day, index) => (
        <DayOfTheWeek key={index} dayData={day} />
      ))}
    </div>
  );
};

export default withRouter(WeekOfTheMonth);
