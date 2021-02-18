import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import IStore from "../../redux/interfaceStore";
import isEmpty from "../../services/isEmpty";
import getDateInFormat from "../../services/getDateInFormat";
import getTimeInFormat from "../../services/getTimeInFormat";
import { UserMessageDataType, MessagesSpecificDateType, UserMessageDataType1} from '../../types/messagesDataTypes';
import { requestAllMessages, setCurrentHour, closeModal } from "../../redux/actions";

import { BACKEND_URL, MODAL_TYPES } from '../../data';

function AddUpdateMessageModal(): JSX.Element {
  const { idSelectedDate, currentHour } = useSelector((store: IStore) => store.calendar);
  const { email, id, role } = useSelector((store: IStore) => store.auth.user);
  const { messages } = useSelector((store: IStore) => store.messages);
  const { modalType } = useSelector((store: IStore) => store.modal);
  const dispatch = useDispatch();
   
  const [stateMessageModal, setStateMessageModal] = React.useState<UserMessageDataType1>({
    userId: id!,
    title: "",
    message: "",
    currentHour: currentHour!,
    email: email!,
    role: role!,
    dayId: idSelectedDate!,
  });

  const targetMessage = messages.find((messagesDay: UserMessageDataType1) => messagesDay.dayId === idSelectedDate && messagesDay.currentHour === currentHour && messagesDay.userId === id);
  
  React.useEffect(() => {
    if (targetMessage) {
    setStateMessageModal(targetMessage);
    }
  }, [currentHour, targetMessage]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setStateMessageModal({
      ...stateMessageModal,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddUpdateButtonClick = () => {
    if (!isEmpty(stateMessageModal.message)) {
      if (targetMessage) {
        axios
          .put( `${BACKEND_URL}/messages/${targetMessage.id}`, stateMessageModal)
          .then(() => {
            dispatch(requestAllMessages(id!, role!));
            dispatch(setCurrentHour(null));
            dispatch(closeModal());
          });
      } else {
        axios
          .post(`${BACKEND_URL}/messages`, stateMessageModal)
          .then(() => {
            dispatch(requestAllMessages(id!, role!));
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
          Date: {getDateInFormat(idSelectedDate!)} 
          <br />
          <br /> 
          Time: {getTimeInFormat(currentHour!)}
        </h3>

        <h3 className="add-update-message-card__author">{email}</h3>

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
