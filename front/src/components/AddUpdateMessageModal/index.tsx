import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import IStore from "../../redux/interfaceStore";
import isEmpty from "../../services/isEmpty";
import getDateInFormat from "../../services/getDateInFormat";
import getTimeInFormat from "../../services/getTimeInFormat";
import { UserMessageDataType1 } from '../../types/messagesDataTypes';
import { requestAllMessages, setCurrentHour, closeModal } from "../../redux/actions";

import { BACKEND_URL, MODAL_TYPES } from '../../data';
import useModalMessageObject from "../../hooks/useMessageObject";

function AddUpdateMessageModal(): JSX.Element {
  const dispatch = useDispatch();

  const messageObject = useModalMessageObject();
  const { modalType } = useSelector((store: IStore) => store.modal);
  const [stateMessageModal, setStateMessageModal] = React.useState<UserMessageDataType1>(messageObject);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setStateMessageModal({
      ...stateMessageModal,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddUpdateButtonClick = () => {
    if (!isEmpty(stateMessageModal.message)) {
      if (stateMessageModal.id) {
        axios
          .put( `${BACKEND_URL}/messages/${stateMessageModal.id}`, stateMessageModal)
          .then(() => {
            dispatch(requestAllMessages(stateMessageModal.userId!));
            dispatch(setCurrentHour(null));
            dispatch(closeModal());
          });
      } else {
        axios
          .post(`${BACKEND_URL}/messages`, stateMessageModal)
          .then(() => {
            dispatch(requestAllMessages(stateMessageModal.userId!));
            dispatch(setCurrentHour(null));
            dispatch(closeModal());
        });
      }
    }
  };

  return (
    <div className="add-update-message-card">
      <div className="add-update-message-card__header">

        <h3 className="add-update-message-card__date">
          Date: {getDateInFormat(stateMessageModal.dayId!)} 
          <br />
          <br /> 
          Time: {getTimeInFormat(stateMessageModal.currentHour!)}
        </h3>

        <h3 className="add-update-message-card__author">{stateMessageModal.email}</h3>

      </div>

      <input
        type="text"
        placeholder="title"
        className="input add-update-message-card__input"
        name="title"
        value={stateMessageModal.title}
        onChange={handleInputChange}
      />

      <textarea
        placeholder="note"
        className="input add-update-message-card__textarea"
        name="message"
        value={stateMessageModal.message}
        onChange={handleInputChange}
      />

      <div className="add-update-message-card__buttons">
        {MODAL_TYPES.UPDATE === modalType && (
          <button
            className="button button__prim"
            onClick={handleAddUpdateButtonClick}
          >
            update
          </button>
        )}

        {MODAL_TYPES.ADD === modalType && (
          <button
            className="button button__prim"
            onClick={handleAddUpdateButtonClick}
          >
            add
          </button>
        )}
        
      </div>
    </div>
  );
}

export default AddUpdateMessageModal;
