import React from "react";
import { useDispatch } from "react-redux";
import * as CONSTANTS from '../../../constants';
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
    dispatch(openModal(CONSTANTS.MODAL_TYPES.ADD));
  };
  return (
    <div className="card-message border_bottom">
      <h3 className="card-message__time">
        {getTimeInFormat(currentHour)}
      </h3>
      <div className="card-message__message">Add note...</div>
      <div className="card-message__buttons">
        <button className="button button__prim" onClick={handleOpenModalClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default CardEmpty;