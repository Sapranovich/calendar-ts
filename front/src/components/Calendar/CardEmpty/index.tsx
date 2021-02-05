import React from "react";
import { useDispatch, useSelector } from "react-redux";

import IStore from "../../../redux/interfaceStore";
import { openModal, setCurrentHour } from "../../../redux/actions";
import getTimeInFormat from "../../../services/getTimeInFormat";

import * as CONSTANTS from "../../../constants";

const CardEmpty = ({ currentHour }: { currentHour: number }): JSX.Element => {
  const { role } = useSelector((store: IStore) => store.auth.user);
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
