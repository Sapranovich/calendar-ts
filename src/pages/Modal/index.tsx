import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  addMessage,
  setAllMessages,
  setCurrentHour,
  updateSelectedDate,
  requestAllMessages,
} from "../../redux/actions";
import * as constants from "../../constants";
import {
  IUserMessageData,
  IUserMessageDataProps,
} from "../../redux/messages/messagesActions";
import getTimeInFormat from "../../services/getTimeInFormat";
import getDateInFormat from "../../services/getDateInFormat";
import isEmpty from "../../services/isEmpty";
import axios from "axios";

function Modal() {
  const { idSelectedDate, selectedDate, currentHour } = useSelector(
    (store: any) => store.calendar
  );
  const { email, id, role } = useSelector(
    (store: any) => store.auth.user
  );
  const { messages, isLoadedMessages } = useSelector(
    (store: any) => store.messages
  );
  const { typeModal } = useSelector((store: any) => store.modal);
  const dispatch = useDispatch();

  const [modelMessageObj, setModelMessageObj] = React.useState<IUserMessageDataProps>({
    userId: id,
    message: "",
    currentHour,
    email,
    role,
  });

  const messagesTargetDay = messages.find((messagesDay: IUserMessageData) => messagesDay.id === idSelectedDate);

  React.useEffect(() => {
    if (messagesTargetDay && messagesTargetDay.messages[currentHour]) {
      const targetMessage = messagesTargetDay.messages[currentHour];
      setModelMessageObj(targetMessage);
    }
    // if(!isEmpty(messagesTargetDay) && typeModal === 'update'){
    // const modelTargetMessage = messagesTargetDay.messages.find((message: IUserMessageDataProps) => message.id === currentHour);
    // setModelMessageObj(modelTargetMessage)
    // }
    // const messageTarget = messagesTargetDay.messages.find(
    //   (message: IUserMessageDataProps) => message.id === currentHour
    // );
    // setDataTarget(messageTarget);
  }, []);

  const handleCloseButtonClick = () => {
    dispatch(setCurrentHour(null));
    dispatch(closeModal());
  };

  const handleChangeInputText = ( event: React.ChangeEvent<HTMLTextAreaElement> ) => {
    setModelMessageObj({ ...modelMessageObj, message: event.target.value });

  };

  const handleAddButtonClick = (event: React.SyntheticEvent) => {
    if (!isEmpty(modelMessageObj.message)) {
      if (messagesTargetDay) {
        messagesTargetDay.messages[currentHour] = modelMessageObj;
        axios
          .put(`${constants.BACKEND_URL}/messages/${idSelectedDate}`,messagesTargetDay)
          .then((res) => {
            dispatch(requestAllMessages());
            dispatch(setCurrentHour(null));
            dispatch(closeModal());
          });
      } else {
        let array = new Array(24);
        array[currentHour] = modelMessageObj;
        const data = {
          id: idSelectedDate,
          messages: array,
        };
        axios.post(`${constants.BACKEND_URL}/messages`, data).then((res) => {
          dispatch(requestAllMessages());
          dispatch(setCurrentHour(null));
          dispatch(closeModal());
        });
      }
    }
  };

  const handleRemoveButtonClick = () => {};

  return (
    <div className={`modal modal_visibility`}>
      <div className="modal__wrapper">
        <span
          className="modal__close-button"
          onClick={handleCloseButtonClick}
        ></span>
        <div className="card">
          <h3 className="card__title">
            {getDateInFormat(idSelectedDate)} {getTimeInFormat(currentHour)}
          </h3>
          <textarea
            onChange={handleChangeInputText}
            value={modelMessageObj.message}
            className="card__textarea"
            placeholder="Введите текст..."
            name="card-text"
          />

          <div className="to-do-list__item-buttons">
            <button className="button" onClick={handleAddButtonClick}>
              Добавить заметку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
