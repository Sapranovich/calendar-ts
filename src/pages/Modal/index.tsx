import React, { ReactEventHandler } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {closeModal, addMessage, setAllMessages, setCurrentHour, updateSelectedDate} from '../../redux/actions';
import {IUserMessageData} from '../../redux/messages/messagesActions';
import getTimeInFormat from '../../services/getTimeInFormat';
import getDateInFormat from '../../services/getDateInFormat';
import isEmpty from '../../services/isEmpty';
import axios from 'axios';
const URL_DB = "http://localhost:3001";
function Modal() {
  const { idSelectedDate, selectedDate, currentHour } = useSelector((store: any) => store.calendar);
  const { email, id, role } = useSelector( (store: any) => store.authReducer.user);

  const [dataTargetMessage, setDataTargetMEssage] = React.useState<IUserMessageData | {}>({});
  const [inputText, setInputText] = React.useState('');
  // const { messages } = useSelector((store: any) => store.messages );

  React.useEffect(()=>{
    axios.get(`${URL_DB}/messages/${idSelectedDate}`)
    .then(res=> {
      const messages = res.data.messages;
      const targetMessage = messages.find((message:IUserMessageData) => message.id === currentHour);
      setDataTargetMEssage(targetMessage);
      
    })
    // .then(res=> console.log(res))
      // const updateMessage = messages.filter((messageItem:IUserMessageData)=> messageItem.id === idSelectedDate)
      // const asd = messages.find((message:IUserMessageData) => message.id === idSelectedDate);
      
  },[])


  const dispatch = useDispatch();
  
  const handleCloseButtonClick = ()=>{
    dispatch(setCurrentHour(null))
    dispatch(closeModal());
  }
  const handleChangeInputText = () =>{
  }

  const handleAddButtonClick = (event:React.SyntheticEvent) =>{
     if(!isEmpty(inputText)){
        const userMessageData = {
          userId: id,
          message: inputText,
          currentHour,
          email,
          role,
          id:currentHour
        }
        dispatch(addMessage(userMessageData, idSelectedDate))
     }
    
  }
  
  const handleRemoveButtonClick = () =>{
    
  } 

  return (
    <div className={`modal modal_visibility`}>
      <div className="modal__wrapper">
        <span className="modal__close-button" onClick={handleCloseButtonClick}></span>
        <div className="card">
    <h3 className="card__title">{getDateInFormat(idSelectedDate)}  {getTimeInFormat(currentHour)}</h3>
          <textarea
            onChange = {handleChangeInputText}
            value = {inputText}
            className="card__textarea"
            placeholder="Введите текст..."
            name="card-text"
          />

          <div className="to-do-list__item-buttons">
            <button className ='button' onClick={handleAddButtonClick}>Добавить заметку</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;