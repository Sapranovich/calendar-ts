import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { openModal, setCurrentHour } from "../../../redux/actions";
import getTimeInFormat from "../../../services/getTimeInFormat";
import { UserMessageDataType } from '../../../types/messagesDataTypes';

import * as CONSTANTS from "../../../constants";

export interface ICardMessageProps {
  message: UserMessageDataType;
}

const CardEmpty = ({ currentHour }: { currentHour: number }): JSX.Element => {
  const { role } = useSelector((store: any) => store.auth.user);
  const dispatch = useDispatch();

  const handleOpenModalClick = () => {
    dispatch(setCurrentHour(currentHour));
    dispatch(openModal(CONSTANTS.MODAL_TYPES.ADD));
  };

  return (
    <div className="card-message border_bottom">
      <h3 className="card-message__time">{getTimeInFormat(currentHour)}</h3>
      <div className="card-message__message">Add note...</div>
      <div className="card-message__buttons">
        {CONSTANTS.BASIC_ROLES.VIEWER !== role && (
          <button
            className="button button__prim"
            onClick={handleOpenModalClick}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default CardEmpty;
