import React from "react";
import CardMessage from "../CardMessage";
import { useSelector } from "react-redux";

function Segment() {
  const { isNoMessages, isLoadedMessages, messages } = useSelector(
    (store: any) => store.messages
  );
  console.log(isNoMessages, isLoadedMessages, messages);
  return (
    <div className="segment">
      <div className="segment__header border_bottom">
        <h3 className="segment__header-title">
          Все заметки
        </h3>
        {!isNoMessages && (
          <div className="filter">
            <input className="filter__input" type="text" />
            <input className="filter__input" type="text" />
            <button className="filter__button">filter</button>
          </div>
        )}
      </div>
      {!isNoMessages && (
        <React.Fragment>
          <div className="segment__group">
            <h3 className="segment__date">12.12.2020</h3>
            <CardMessage />
            <CardMessage />
            <CardMessage />
          </div>
          <div className="segment__group">
            <h3 className="segment__date">12.12.2020</h3>
            <CardMessage />
            <CardMessage />
            <CardMessage />
          </div>
          <div className="segment__group">
            <h3 className="segment__date">12.12.2020</h3>
            <CardMessage />
            <CardMessage />
            <CardMessage />
          </div>
          <div className="segment__group">
            <h3 className="segment__date">12.12.2020</h3>
            <CardMessage />
            <CardMessage />
            <CardMessage />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Segment;
