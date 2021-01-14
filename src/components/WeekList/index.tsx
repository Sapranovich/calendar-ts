import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { InitialStateDataType } from "../../redux/calendar/calendarReducers";

interface CellDayPropsType extends RouteComponentProps<any> {
  dayData: InitialStateDataType;
}
const WeekList = ({match}:RouteComponentProps<any>) => {
 
  return (
    <div className="week-list">
      week-list
      {match.params.idSelectedWeek}
    </div>
  );
};

export default withRouter(WeekList);
