import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/actions";
import getTimeInFormat from "../../../services/getTimeInFormat";
function CardMessage({ data, hour }: { data?: null; hour?: number }) {
  const dispatch = useDispatch();
  const handleOpenModalClick = () => {
    dispatch(openModal());
  };
  return (
    <div className="card-message border_bottom">
      <h3 className="card-message__time" onClick={handleOpenModalClick}>{getTimeInFormat(hour)}</h3>
      {data ? (
        <React.Fragment>
          <div className="card-message__marker card-message__marker_admin">
            U
          </div>
          <h4 className="card-message__email">admin@admin.admin</h4>
          <div className="card-message__message">Нучно сдкелать та</div>
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
        </React.Fragment>
      ) : (
        <div className="card-message__message">Добавить заметку...</div>
      )}
    </div>
  );
}

export default CardMessage;
