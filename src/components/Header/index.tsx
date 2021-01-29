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
      <div className="wrapper">
        <div className="header__wrapper">
          <div className="header__group">
            <span className="hamburger" onClick={handleToggleAsideButtonClick}>
              <span className="hamburger__line"></span>
            </span>
            <h2 className="header__email">{email}</h2>
            <MonthToggle />
            <h2 className="header__date">
              {CONSTANTS.MONTH_NAMES[basicDate.getMonth()]}{" "}
              {basicDate.getFullYear()}
            </h2>
            <Link to="/calendar" className="button header__button">
              Calendar
            </Link>
            <Link to="/calendar/segment" className="button header__button">
              All notes
            </Link>
            <Link
              to="/calendar/day"
              className="button header__button"
              onClick={handleCurrentDateButtonClick}
            >
              Today
            </Link>
          </div>

          <Link to="/logout" className="button header__button">
            logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
