import React from "react";
import { withRouter } from "react-router-dom";
import { WeekOfTheMonthPropTypes } from "../../Month/WeekOfTheMonth";
import WidgetDayOfTheWeek from "../WidgetDayOfTheWeek";

const WidgetWeekOfTheMonth = ({ weekData, weekNumber }: WeekOfTheMonthPropTypes) => {
  return (
    <div key={weekNumber} className="widget-month__week">
      {weekData.map((day, index) => (
        <WidgetDayOfTheWeek key={index} dayData={day} />
      ))}
    </div>
  );
};

export default withRouter(WidgetWeekOfTheMonth);
