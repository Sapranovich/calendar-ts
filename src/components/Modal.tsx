import React from "react";

import getTimeInFormat from '../services/timeServices';
import saveInLocalStorage from '../services/localStoreServices';

import {ICalendarProps} from '../interfaces/basicInterfaces';

function Modal({store, setStore}: ICalendarProps) {
  const {isOpenModal, idSelectedDate, selectedDate, dataChangeMessage:{currentHour, text}} = store;
  const [inputText, setInputText] = React.useState(text);

  const handleCloseButtonClick = ()=>{
    setStore({...store, isOpenModal: !isOpenModal, dataChangeMessage: {
      currentHour: undefined,
      text: '',
    }})
  }

  const handleChangeInputText = (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
    setInputText(event.target.value);
  }

  const handleAddButtonClick = () =>{
    if(!localStorage.getItem("storeMessages")){
      localStorage.setItem("storeMessages", JSON.stringify({}));
    }
    saveInLocalStorage(idSelectedDate, currentHour, inputText);
    setStore({...store, isOpenModal: !isOpenModal, 
      storeMessages: JSON.parse(localStorage.getItem("storeMessages") || '{}'),
      dataChangeMessage: {
      currentHour: undefined,
      text: '',
      }
    })
  }
  
  const handleRemoveButtonClick = () =>{
    setInputText('')
  } 

  return (
    <div className={`modal modal_visibility`}>
      <div className="modal__wrapper">
        <span className="modal__close-button" onClick={handleCloseButtonClick}></span>
        <div className="card">
          <h3 className="card__title">Дата {selectedDate.toLocaleString().split(',')[0]}  Время {getTimeInFormat(currentHour)}</h3>
          <textarea
            onChange = {handleChangeInputText}
            value = {inputText}
            className="card__textarea"
            placeholder="Введите текст..."
            name="card-text"
          />

          <div className="to-do-list__item-buttons">
            <button className="button to-do-list__button to-do-list__button_add" onClick={handleAddButtonClick}></button>
            <button className="button to-do-list__button to-do-list__button_remove" onClick={handleRemoveButtonClick}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
