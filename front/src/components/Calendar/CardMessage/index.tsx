import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import isEmpty from "../../../services/isEmpty";
import { openModal, setCurrentHour, updateSelectedDate } from "../../../redux/actions";
import getTimeInFormat from "../../../services/getTimeInFormat";
import { requestAllMessages } from "../../../redux/messages/messagesActions";
import { UserMessageDataType } from '../../../types/messagesDataTypes';

import * as CONSTANTS from "../../../constants";

export interface ICardMessageProps {
  message: UserMessageDataType;
  groupId?: number;
}
const CardMessage = ({ groupId, message: { message, email, currentHour, role, userId }}: ICardMessageProps): JSX.Element => {
  const { id } = useSelector((store: any) => store.auth.user);
  const roleCurrentUser = useSelector((store: any) => store.auth.user.role);
  const { messages } = useSelector((store: any) => store.messages);
  const { idSelectedDate } = useSelector((store: any) => store.calendar);
  const dispatch = useDispatch();

  const handleOpenModalClick = (modalType: string) => {
    if (groupId) {
      const date = new Date(groupId);
      dispatch(updateSelectedDate(date));
    }
    dispatch(setCurrentHour(currentHour));
    dispatch(openModal(modalType));
  };

  const handleRemoveButtonClick = () => {
    const currentId = groupId || idSelectedDate;
    const messagesTargetDay = messages.find((el: any) => el.id === currentId);
    messagesTargetDay.messages[currentHour] = null;
    const isMessages = !isEmpty(messagesTargetDay.messages.filter((el: any) => el));
    if (isMessages) {
      axios
        .put(`${CONSTANTS.BACKEND_URL}/messages/${currentId}`, messagesTargetDay)
        .then(() => {
          dispatch(requestAllMessages());
        });
    } else {
      axios
        .delete(`${CONSTANTS.BACKEND_URL}/messages/${currentId}`)
        .then(() => {
          dispatch(requestAllMessages());
        });
    }
  };

  return (
    <div className="card-message border_bottom">
      <h3 className="card-message__time">{getTimeInFormat(currentHour)}</h3>
      <div className={`card-message__marker card-message__marker_${role}`}>
        {role[0]}
      </div>
      <h4 className="card-message__email">{email}</h4>
      <div className="card-message__message">{message}</div>
      <div className="card-message__buttons">
        <button
          className="button button__prim"
          onClick={() => handleOpenModalClick(CONSTANTS.MODAL_TYPES.VIEW)}
        >
          View
        </button>
        {id === userId && CONSTANTS.BASIC_ROLES.VIEWER !== roleCurrentUser && (
          <React.Fragment>
            <button
              className="button button__prim"
              onClick={() => handleOpenModalClick(CONSTANTS.MODAL_TYPES.UPDATE)}
            >
              Update
            </button>
            <button
              className="button button__prim"
              onClick={handleRemoveButtonClick}
            >
              Remove
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default CardMessage;
