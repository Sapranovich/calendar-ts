import React from "react";
import { useDispatch } from "react-redux";
import { openModal, setCurrentHour } from "../../../redux/actions";
import getTimeInFormat from "../../../services/getTimeInFormat";
import { IUserMessageDataProps } from "../../../redux/messages/messagesActions";
export interface ICardMessageProps {
  message: IUserMessageDataProps;
}
function CardEmpty({ currentHour }: { currentHour: number }) {
  const dispatch = useDispatch();
  const handleOpenModalClick = () => {
    dispatch(setCurrentHour(currentHour));
    dispatch(openModal());
  };
  return (
    <div className="card-message border_bottom">
      <h3 className="card-message__time" onClick={handleOpenModalClick}>
        {getTimeInFormat(currentHour)}
      </h3>
      <div className="card-message__message">Добавить заметку...</div>
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

export default CardEmpty;