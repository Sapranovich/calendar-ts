import React from "react";
import { updateDataMonth } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function MonthToggle() {
  const dispatch = useDispatch();

  const { basicDate } = useSelector((store: any) => store.calendar);

  const handlePrevMonthButtonClick = () => {
    const date = new Date(basicDate.getFullYear(), basicDate.getMonth() - 1);
    dispatch(updateDataMonth(date));
  };
  const handleNextMonthButtonClick = () => {
    const date = new Date(basicDate.getFullYear(), basicDate.getMonth() + 1);
    dispatch(updateDataMonth(date));
  };
  return (
    <div className="month-toggle__buttons">
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
