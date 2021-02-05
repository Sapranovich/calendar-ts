import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import IStore from "../../redux/interfaceStore";
import isEmpty from "../../services/isEmpty";
import getDateInFormat from "../../services/getDateInFormat";
import getTimeInFormat from "../../services/getTimeInFormat";
import { UserMessageDataType, MessagesSpecificDateType } from '../../types/messagesDataTypes';
import { requestAllMessages, setCurrentHour, closeModal } from "../../redux/actions";

import * as CONSTANTS from "../../constants";

function AddUpdateMessageModal(): JSX.Element {
  const { idSelectedDate, currentHour } = useSelector((store: IStore) => store.calendar);
  const { email, id, role } = useSelector((store: IStore) => store.auth.user);
  const { messages } = useSelector((store: IStore) => store.messages);
  const { modalType } = useSelector((store: IStore) => store.modal);
  const dispatch = useDispatch();
   
  const [stateMessageModal,setStateMessageModal] = React.useState<UserMessageDataType>({
    userId: id!,
    title: "",
    message: "",
    currentHour: currentHour!,
    email: email!,
    role: role!,
  });

  const messagesTargetDay = messages.find((messagesDay: MessagesSpecificDateType) => messagesDay.id === idSelectedDate);
  
  React.useEffect(() => {
    if (messagesTargetDay && messagesTargetDay.messages[currentHour!]) {
      const targetMessage = messagesTargetDay.messages[currentHour!];
      targetMessage  && setStateMessageModal(targetMessage);
    }
  }, [currentHour, messagesTargetDay]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setStateMessageModal({
      ...stateMessageModal,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddUpdateButtonClick = () => {
    if (!isEmpty(stateMessageModal.message)) {
      if (messagesTargetDay) {
        messagesTargetDay.messages[currentHour!] = stateMessageModal;
        axios
          .put( `${CONSTANTS.BACKEND_URL}/messages/${idSelectedDate}`, messagesTargetDay)
          .then(() => {
            dispatch(requestAllMessages());
            dispatch(setCurrentHour(null));
            dispatch(closeModal());
          });
      } else {
        const array = new Array(24);
        array[currentHour!] = stateMessageModal;
        const data = {
          id: idSelectedDate,
          messages: array,
        };
        axios
          .post(`${CONSTANTS.BACKEND_URL}/messages`, data)
          .then(() => {
            dispatch(requestAllMessages());
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
        {CONSTANTS.MODAL_TYPES.UPDATE === modalType && (
          <button
            className="button button__prim"
            onClick={handleAddUpdateButtonClick}
          >
            update
          </button>
        )}

        {CONSTANTS.MODAL_TYPES.ADD === modalType && (
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
