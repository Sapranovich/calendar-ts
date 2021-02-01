import React from "react";
import { useDispatch, useSelector } from "react-redux";
import *as CONSTANTS from '../../../constants';
import isEmpty from '../../../services/isEmpty';
import {
  openModal,
  setCurrentHour,
  updateSelectedDate,
} from "../../../redux/actions";
import getTimeInFormat from "../../../services/getTimeInFormat";
import { IUserMessageDataProps, requestAllMessages } from "../../../redux/messages/messagesActions";
import axios from "axios";

export interface ICardMessageProps {
  message: IUserMessageDataProps;
  groupId?: number;
}
function CardMessage({
  groupId,
  message: { message, email, currentHour, role, userId },
}: ICardMessageProps) {
  const { id } = useSelector((store: any) => store.auth.user);
  const { messages } = useSelector((store: any) => store.messages);
  const  {idSelectedDate} = useSelector((store: any) => store.calendar);
  const dispatch = useDispatch();
  const handleOpenModalClick = (modalType:string) => {
      if (groupId) {
        const date = new Date(groupId);
        dispatch(updateSelectedDate(date));
      }
      dispatch(setCurrentHour(currentHour));
      dispatch(openModal(modalType));
  };

  const handleRemoveButtonClick = () => {
    const currentId = groupId || idSelectedDate;
    const messagesTargetDay = messages.find((el:any)=> el.id === currentId);
    messagesTargetDay.messages[currentHour] = null;
    const isMessages = !isEmpty(messagesTargetDay.messages.filter((el:any)=> el))
    console.log(isMessages)
    if(isMessages){
      axios
      .put(`${CONSTANTS.BACKEND_URL}/messages/${currentId}`,messagesTargetDay)
      .then((res) => {
        dispatch(requestAllMessages());
      });
    }else{
      axios
      .delete(`${CONSTANTS.BACKEND_URL}/messages/${currentId}`)
      .then((res) => {
        dispatch(requestAllMessages());
        console.log(messages)
      });
    }

  }
  
  return (
    <div className="card-message border_bottom">
      <h3 className="card-message__time">
        {getTimeInFormat(currentHour)}
      </h3>
      <div className={`card-message__marker card-message__marker_${role}`}>
        {role[0]}
      </div>
      <h4 className="card-message__email">{email}</h4>
      <div className="card-message__message">{message}</div>
      <div className="card-message__buttons">
        <button className="button button__prim" onClick={()=> handleOpenModalClick(CONSTANTS.MODAL_TYPES.VIEW)}>View</button>
        {id === userId && (
          <React.Fragment>
            <button className="button button__prim" onClick={()=> handleOpenModalClick(CONSTANTS.MODAL_TYPES.UPDATE)}>Update</button>
            <button className="button button__prim" onClick={handleRemoveButtonClick}>Remove</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default CardMessage;
