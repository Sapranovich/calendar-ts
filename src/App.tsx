import React from 'react';

import Calendar from './components/Calendar';
import Modal from './components/Modal';
import ToDoList from './components/ToDoList';

import {IStandartTypesStore} from './interfaces/basicInterfaces';

function App() {
  const date = new Date();
  const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const [store, getStore] = React.useState<IStandartTypesStore>({
    isOpenModal: false,
    calendarDate: currentDate,
    currentDate: currentDate,
    selectedDate: currentDate,
    idSelectedDate: currentDate.getTime(),
    storeMessages: JSON.parse(localStorage.getItem("storeMessages") || '{}'),
    dataChangeMessage: {
       currentHour: null,
       text: '',
     },
  })

  return (
    <div className="app">
      <div className="wrapper">
        <div className="app__wrapper">
          <Calendar  store={store} getStore={getStore}/>
          <ToDoList store={store} getStore={getStore}/>
        </div>
        {store.isOpenModal && <Modal store={store} getStore={getStore}/> }
      </div>
    </div>
  );
}

export default App;
