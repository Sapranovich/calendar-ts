import React from "react";
import axios from 'axios';
import isEmpty from '../../services/isEmpty';
import {requestAllMessages, setCurrentHour, closeModal} from '../../redux/actions';
import * as CONSTANTS from '../../constants';
import { useSelector, useDispatch } from "react-redux";
import {
  IUserMessageData,
  IUserMessageDataProps,
} from "../../redux/messages/messagesActions";
import getDateInFormat from "../../services/getDateInFormat";
import getTimeInFormat from "../../services/getTimeInFormat";
function AddUpdateMessageModal() {
  const { idSelectedDate, currentHour } = useSelector( (store: any) => store.calendar );
  const { email, id, role } = useSelector((store: any) => store.auth.user);
  const { messages } = useSelector(
    (store: any) => store.messages
  );
  const { modalType } = useSelector((store: any) => store.modal);
  const dispatch = useDispatch();

  const [stateMessageModal, setStateMessageModal] = React.useState<
    IUserMessageDataProps
  >({
    userId: id,
    title: "",
    message: "",
    currentHour,
    email,
    role,
  });

  const messagesTargetDay = messages.find(
    (messagesDay: IUserMessageData) => messagesDay.id === idSelectedDate
  );
  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setStateMessageModal({
      ...stateMessageModal,
      [event.target.name]: event.target.value,
    });
  };
  React.useEffect(() => {
    if (messagesTargetDay && messagesTargetDay.messages[currentHour]) {
      const targetMessage = messagesTargetDay.messages[currentHour];
      setStateMessageModal(targetMessage);
    }
  }, [currentHour, messagesTargetDay]);

  const handleAddUpdateButtonClick = ()=>{
    if (!isEmpty(stateMessageModal.message)) {
      if (messagesTargetDay) {
        messagesTargetDay.messages[currentHour] = stateMessageModal;
        axios
          .put(`${CONSTANTS.BACKEND_URL}/messages/${idSelectedDate}`,messagesTargetDay)
          .then((res) => {
            dispatch(requestAllMessages());
            dispatch(setCurrentHour(null));
            dispatch(closeModal());
          });
      } else {
        let array = new Array(24);
        array[currentHour] = stateMessageModal;
        const data = {
          id: idSelectedDate,
          messages: array,
        };
        axios.post(`${CONSTANTS.BACKEND_URL}/messages`, data).then((res) => {
          dispatch(requestAllMessages());
          dispatch(setCurrentHour(null));
          dispatch(closeModal());
        });
      }
    }
  }


  return (
    <div className="add-update-message-card">
      <div className="add-update-message-card__header">
        <h3 className="add-update-message-card__date"> Date: {getDateInFormat(idSelectedDate)} <br/><br/> Time: {getTimeInFormat(currentHour)} </h3>
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
        {CONSTANTS.MODAL_TYPES.UPDATE === modalType && <button className="button button__prim" onClick={handleAddUpdateButtonClick}>update</button>}
        {CONSTANTS.MODAL_TYPES.ADD === modalType && <button className="button button__prim" onClick={handleAddUpdateButtonClick}>add</button>}
        
      </div>
    </div>
  );
}

export default AddUpdateMessageModal;
