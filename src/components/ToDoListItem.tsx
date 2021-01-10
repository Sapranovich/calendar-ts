import React from "react";

import getTimeInFormat from '../services/timeServices';
import saveInLocalStorage from '../services/localStoreServices';

import {IToDoListItemProps} from '../interfaces/basicInterfaces';

function ToDoListItem({hour, data, store, setStore}:IToDoListItemProps) {
  const { isOpenModal, idSelectedDate} = store;
  
  const handleOpenModalButtonClick = ()=>{
    setStore({...store, 
      isOpenModal: !isOpenModal,
      dataChangeMessage: {
        currentHour: hour,
        text: data ? data : '',
      },
     })
  }

  const handleRemoveMessageButtonClick = ()=>{
    saveInLocalStorage(idSelectedDate, hour, '');
    setStore({...store, 
      storeMessages: JSON.parse(localStorage.getItem("storeMessages") || '{}'),
    })
  }

  return (
  <div className={`to-do-list__item to-do-list_decor-bot ${data ? 'to-do-list__item_colored':''}`}>
      <h4 className="to-do-list__item-title" onClick={handleOpenModalButtonClick}>{getTimeInFormat(hour)}</h4>
      <div className="to-do-list__item-description">
       {data ? data : 'Нет заметок...'}
      </div>
      <div className="to-do-list__item-buttons">
        {!data && <button className="button to-do-list__button to-do-list__button_add" onClick={handleOpenModalButtonClick}></button>}
        {data && <button className="button to-do-list__button to-do-list__button_update" onClick={handleOpenModalButtonClick}></button>}
        {data && <button className="button to-do-list__button to-do-list__button_remove" onClick={handleRemoveMessageButtonClick}></button>}
      </div>
    </div>
  );
}

export default ToDoListItem;
