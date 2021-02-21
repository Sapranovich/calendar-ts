import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import IStore from "../../../redux/interfaceStore";
import { openModal, setCurrentHour, updateSelectedDate, setModalData } from "../../../redux/actions";
import getTimeInFormat from "../../../services/getTimeInFormat";
import { requestAllMessages } from "../../../redux/messages/messagesActions";
import { CardMessagePropsType } from '../../../types/cardMessageTypes';

import { BACKEND_URL, MODAL_TYPES } from '../../../data';

const CardMessage = ({ groupId, messageData}: CardMessagePropsType): JSX.Element => {
  const authId = useSelector((store: IStore) => store.auth.user.id);
  const authRole = useSelector((store: IStore) => store.auth.user.role);
  const dispatch = useDispatch();

  const handleOpenModalClick = (modalType: string) => {
    dispatch(setModalData(messageData))
    if (groupId) {
      const date = new Date(groupId);
      dispatch(updateSelectedDate(date));
    }
    dispatch(setCurrentHour(messageData.currentHour!));
    dispatch(openModal(modalType));
  };
  const handleRemoveButtonClick = () => {
    axios
      .delete(`${BACKEND_URL}/messages/${messageData.id}`)
      .then(() => {
        dispatch(requestAllMessages(authId!));
    });

  };

  return (
    <div className="card-message border_bottom">
      <h3 className="card-message__time">{getTimeInFormat(messageData.currentHour!)}</h3>
      <div className={`card-message__marker card-message__marker_${messageData.role!}`}>
        {messageData.role![0]}
      </div>
      <h4 className="card-message__email">{messageData.email}</h4>
      <div className="card-message__message">{messageData.message}</div>
      <div className="card-message__buttons">
        <button
          className="button button__prim"
          onClick={() => handleOpenModalClick(MODAL_TYPES.VIEW)}
        >
          View
        </button>
        {authId === messageData.userId  && (
          <React.Fragment>
            <button
              className="button button__prim"
              onClick={() => handleOpenModalClick(MODAL_TYPES.UPDATE)}
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
