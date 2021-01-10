import React from "react";
import * as CONSTANTS from '../constants.js';

import ToDoListItem from './ToDoListItem';

import {ICalendarProps} from '../interfaces/basicInterfaces';

function ToDoList({store, getStore}:ICalendarProps) {
  const {currentDate, selectedDate, storeMessages, idSelectedDate} = store;
 
  const handleCurrentButtonClick =()=>{
    getStore({
      ...store,
      selectedDate:currentDate, 
      calendarDate: currentDate,
      idSelectedDate: currentDate.getTime(),
    })
  }
 
  return (
    <div className="to-do-list app__to-do-list">
      <div className="to-do-list__header">
        <h3 className="to-do-list__title"> {selectedDate.toLocaleString().split(',')[0]}</h3>
        <button onClick={handleCurrentButtonClick} className="button to-do-list__button to-do-list__button_current"></button>
      </div>
      <div className="to-do-list__wrapper to-do-list_decor">
        {
          (idSelectedDate in storeMessages) 
          ? storeMessages[idSelectedDate].map((data:string | null, index:number)=> <ToDoListItem store ={store} getStore={getStore} key={index} hour={index} data = {data} />)
          : (Array(CONSTANTS.HOURS_DAY).fill(null).map( (data, index)=> <ToDoListItem store ={store} getStore={getStore} key={index} hour={index} data = {data} />)) 
        }
      </div>
    </div>
  );
}


export default ToDoList;
