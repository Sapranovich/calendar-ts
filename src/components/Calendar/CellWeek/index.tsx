import React from "react";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import CellDay from "../CellDay";
import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";



interface CellWeekPropTypes extends RouteComponentProps<any> {
  weekData: InitialStateDataType[]
  weekNumber: number
};

const CellWeek = ({history, weekData, weekNumber }: CellWeekPropTypes) => {
  const handleTransitionButtonClick = () =>{
    history.push(`/calendar/week/${weekNumber}`)
  }
  return (
    <div key={weekNumber} className="week">
      <button className='button week__button' onClick={handleTransitionButtonClick}>{weekNumber+1}</button>
      {weekData.map((day, index) => (
        <CellDay key = {index} dayData={day} />
      ))}
    </div>
  );
};

export default withRouter(CellWeek);
