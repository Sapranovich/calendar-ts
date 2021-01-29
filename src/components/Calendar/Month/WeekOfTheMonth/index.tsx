import React from "react";
import { useDispatch } from "react-redux";
import {
  RouteComponentProps,
  withRouter,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { InitialStateDataType } from "../../../../redux/calendar/calendarReducers";
import DayOfTheWeek from "../DayOfTheWeek";

export interface WeekOfTheMonthPropTypes extends RouteComponentProps<any> {
  weekData: InitialStateDataType[];
  weekNumber: number;
}

const WeekOfTheMonth = ({
  history,
  weekData,
  weekNumber,
}: WeekOfTheMonthPropTypes) => {
  console.log(weekData)
  return (
    <div key={weekNumber} className="month-list__week border_bottom">
      {weekData.map((day, index) => (
        <DayOfTheWeek key={index} dayData={day} />
      ))}
    </div>
  );
};

export default withRouter(WeekOfTheMonth);
