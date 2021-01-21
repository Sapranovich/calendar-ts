import React from "react";
import {withRouter} from 'react-router-dom';
import WidgetCellDay from "../WidgetCellDay";
import {CellWeekPropTypes} from '../../CellWeek';

const WidgetCellWeek = ({history, weekData, weekNumber }: CellWeekPropTypes) => {
  return (
    
    <div key={weekNumber} className="widget-week">
      {weekData.map((day, index) => (
        <WidgetCellDay  key = {index} dayData={day}/>
      ))}
    </div>
  );
};

export default withRouter(WidgetCellWeek);
