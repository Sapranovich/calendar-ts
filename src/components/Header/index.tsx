import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as CONSTANTS from "../../constants";
import { updateDataMonth, updateSelectedDate } from "../../redux/actions";
import MonthToggle from "../Calendar/MonthToggle";


interface IHeaderProps {
  isOpenSideBar: boolean;
  setIsOpenSideBar: React.Dispatch<boolean>;
}

const Header = ({ isOpenSideBar, setIsOpenSideBar }: IHeaderProps) => {
  const dispatch = useDispatch();
  const { basicDate, currentDate } = useSelector(
    (store: any) => store.calendar
  );
  const { email } = useSelector((store: any) => store.auth.user);


  const handleCurrentDateButtonClick = () => {
    dispatch(updateSelectedDate(currentDate));
    dispatch(updateDataMonth(currentDate));
  };
  const handleToggleAsideButtonClick = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <header className="header border_bottom">
      <div className="header__group">
        <span className="hamburger" onClick={handleToggleAsideButtonClick}>
          <span className="hamburger__line"></span>
        </span>
        <h2 className="header__email">{email}</h2>
        <button className="button" onClick={handleCurrentDateButtonClick}>
          Сегодня
        </button>
        <MonthToggle />
        <h2 className="header__date">
          {CONSTANTS.MONTH_NAMES[basicDate.getMonth()]} {basicDate.getFullYear()}
        </h2>
        <Link to='/calendar/segment'>Все заметки</Link>
      </div>

      <Link to="/logout" className="button">
        logout
      </Link>
    </header>
  );
};

export default Header;
