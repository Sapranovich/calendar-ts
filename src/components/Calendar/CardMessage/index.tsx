import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal, setCurrentHour, updateSelectedDate } from "../../../redux/actions";
import getTimeInFormat from "../../../services/getTimeInFormat";
import  {IUserMessageDataProps} from '../../../redux/messages/messagesActions';

export interface ICardMessageProps{
  message:IUserMessageDataProps
  groupId?: number
}
function CardMessage({ groupId, message:{message, email, currentHour, role, userId} }:ICardMessageProps) {
  const {id} = useSelector((store:any)=> store.auth.user)
  const dispatch = useDispatch();
  const handleOpenModalClick = () => {

    if(id === userId){
      if(groupId){
        const date = new Date(groupId);
        dispatch(updateSelectedDate(date))
      }
      dispatch(setCurrentHour(currentHour))
      dispatch(openModal());
    }else{
      console.log('нет доступа к изменению данного сообщения')
    }
  };
  return (
    <div className="card-message border_bottom">
      <h3 className="card-message__time" onClick={handleOpenModalClick}>{getTimeInFormat(currentHour)}</h3>
          <div className={`card-message__marker card-message__marker_${role}`}>
            {role[0]}
          </div>
          <h4 className="card-message__email">{email}</h4>
          <div className="card-message__message">{message}</div>
          <div className="card-message__buttons">
            <button className="button card-message__button card-message__button_add">
              1
            </button>
            <button className="button card-message__button card-message__button_update">
              2
            </button>
            <button className="button card-message__button card-message__button_remove">
              3
            </button>
          </div>
    </div>
  );
}

export default CardMessage;