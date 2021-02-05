import React from "react";
import { useSelector, useDispatch } from "react-redux";

import IStore from "../../../redux/interfaceStore";
import { updateDataMonth } from "../../../redux/actions";

const MonthToggle = (): JSX.Element => {
  const dispatch = useDispatch();
  const { basicDate } = useSelector((store: IStore) => store.calendar);

  const handlePrevMonthButtonClick = () => {
    const date = new Date(basicDate!.getFullYear(), basicDate!.getMonth() - 1);
    dispatch(updateDataMonth(date));
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(basicDate!.getFullYear(), basicDate!.getMonth() + 1);
    dispatch(updateDataMonth(date));
  };

  return (
    <div className="month-toggle">
      <button
        className="month-toggle__button"
        onClick={handlePrevMonthButtonClick}
      >
        ❮
      </button>
      <button
        className="month-toggle__button"
        onClick={handleNextMonthButtonClick}
      >
        ❯
      </button>
    </div>
  );
}
export default MonthToggle;
