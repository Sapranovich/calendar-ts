import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { DayDataType } from "../../../../redux/calendar/calendarReducer";
import DayOfTheWeek from "../DayOfTheWeek";

export interface WeekOfTheMonthPropTypes extends RouteComponentProps<any> {
  weekData: DayDataType[];
  weekNumber: number;
}

const WeekOfTheMonth = ({ weekData, weekNumber }: WeekOfTheMonthPropTypes): JSX.Element => {
  return (
    <div key={weekNumber} className="month-list__week border_bottom">
      {weekData.map((day, index) => (
        <DayOfTheWeek key={index} dayData={day} />
      ))}
    </div>
  );
};

export default withRouter(WeekOfTheMonth);
