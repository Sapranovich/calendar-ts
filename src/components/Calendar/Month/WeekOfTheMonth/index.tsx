import React from "react";
import {useDispatch} from 'react-redux';
import {RouteComponentProps, withRouter, Link} from 'react-router-dom';
import CellDay from "../../CellDay";
import { InitialStateDataType } from "../../../../redux/calendar/calendarReducers";
import DayOfTheWeek from '../DayOfTheWeek';



export interface WeekOfTheMonthPropTypes extends RouteComponentProps<any> {
  weekData: InitialStateDataType[]
  weekNumber: number
};

const WeekOfTheMonth = ({history, weekData, weekNumber }: WeekOfTheMonthPropTypes) => {
  const dispatch = useDispatch();
  const handleTransitionButtonClick = () =>{
    
    history.push(`/calendar/week/${weekNumber}`)
  }
  return (
    <div key={weekNumber} className="month-list__week">
      <Link to='/' className='month-list__link'>1</Link>
      <div className='month-list__week-group'>
      {weekData.map((day, index) => (
        <DayOfTheWeek key = {index} dayData={day} />
      ))}
      </div>
    </div>
  );
};

export default withRouter(WeekOfTheMonth);
