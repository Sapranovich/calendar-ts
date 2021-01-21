import React from "react";
import {withRouter} from 'react-router-dom';

import {CellWeekPropTypes} from '../../CellWeek';
import WidgetDayOfTheWeek from '../WidgetDayOfTheWeek';

const WidgetWeekOfTheMonth = ({history, weekData, weekNumber }: CellWeekPropTypes) => {
  return (
    
    <div key={weekNumber} className="widget-month__week">
      {weekData.map((day, index) => (
        <WidgetDayOfTheWeek  key = {index} dayData={day}/>
      ))}
    </div>
  );
};

export default withRouter(WidgetWeekOfTheMonth);
