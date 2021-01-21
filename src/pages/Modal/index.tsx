import React from "react";
import {useDispatch} from 'react-redux';
import {closeModal} from '../../redux/actions';
function Modal() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = React.useState('');
  
  const handleCloseButtonClick = ()=>{
    dispatch(closeModal());
  }
  const handleChangeInputText = () =>{
  }

  const handleAddButtonClick = () =>{
    
  }
  
  const handleRemoveButtonClick = () =>{
    
  } 

  return (
    <div className={`modal modal_visibility`}>
      <div className="modal__wrapper">
        <span className="modal__close-button" onClick={handleCloseButtonClick}></span>
        <div className="card">
          <h3 className="card__title">Дата  Время </h3>
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