import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { InitialStateDataType } from "../../redux/calendar/calendarReducers";

interface CellDayPropsType extends RouteComponentProps<any> {
  dayData: InitialStateDataType;
}
const DayList = ({match}:RouteComponentProps<any>) => {
 
  return (
    <div className="day-list">
      Day-list
      {match.params.idSelectedDate}
    </div>
  );
};

export default withRouter(DayList);