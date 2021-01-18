import React from "react";
import {withRouter} from 'react-router-dom';

import { CellDayPropsType } from '../../CellDay';

const WidgetCellDay = ({history, dayData: { date, isCurrentMonth }}: CellDayPropsType) => {
  return (
    <div className="widget-day">
      {date.getDate()}
    </div>
  );
};

export default withRouter(WidgetCellDay);