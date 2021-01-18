import React from "react";
import {useDispatch} from 'react-redux';
import {setSelectedWeek} from '../../../redux/actions';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import CellDay from "../CellDay";
import { InitialStateDataType } from "../../../redux/calendar/calendarReducers";



export interface CellWeekPropTypes extends RouteComponentProps<any> {
  weekData: InitialStateDataType[]
  weekNumber: number
};

const CellWeek = ({history, weekData, weekNumber }: CellWeekPropTypes) => {
  const dispatch = useDispatch();
  const handleTransitionButtonClick = () =>{
    dispatch(setSelectedWeek(weekNumber))
    history.push(`/calendar/week/${weekNumber}`)
  }
  return (
    <div key={weekNumber} className="week">
      {weekData.map((day, index) => (
        <CellDay key = {index} dayData={day} />
      ))}
      <button className='button week__button' onClick={handleTransitionButtonClick}>{weekNumber+1}</button>
    </div>
  );
};

export default withRouter(CellWeek);
