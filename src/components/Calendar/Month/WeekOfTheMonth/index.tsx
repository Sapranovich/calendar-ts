import React from "react";
import {useDispatch} from 'react-redux';
import {RouteComponentProps, withRouter, Link, useRouteMatch} from 'react-router-dom';
import { InitialStateDataType } from "../../../../redux/calendar/calendarReducers";
import DayOfTheWeek from '../DayOfTheWeek';



export interface WeekOfTheMonthPropTypes extends RouteComponentProps<any> {
  weekData: InitialStateDataType[]
  weekNumber: number
};

const WeekOfTheMonth = ({history, weekData, weekNumber }: WeekOfTheMonthPropTypes) => {
  const dispath = useDispatch();
  const {path} = useRouteMatch();

  const handleSelectedWeekButtonClick =()=>{
    // dispatch(updateSelectedDate(date))
    history.push(`${path}/week`);
  }
  return (
    <div key={weekNumber} className="month-list__week">
      <button className='month-list__button' onClick ={handleSelectedWeekButtonClick}>1</button>
      <div className='month-list__week-group'>
      {weekData.map((day, index) => (
        <DayOfTheWeek key = {index} dayData={day} />
      ))}
      </div>
    </div>
  );
};

export default withRouter(WeekOfTheMonth);
