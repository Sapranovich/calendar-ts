import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import IStore from "../../redux/interfaceStore";
import { updateDataMonth, updateSelectedDate } from "../../redux/actions";
import MonthToggle from "../Calendar/MonthToggle";

import { MONTH_NAMES } from '../../data';

type HeaderPropsType = {
  isOpenSideBar: boolean;
  setIsOpenSideBar: React.Dispatch<boolean>;
}

const Header = ({ isOpenSideBar, setIsOpenSideBar }: HeaderPropsType): JSX.Element => {
    // Не знаю как решить данную проблему, связанную с вариативностью типов basicDate, currentDate
  const dispatch = useDispatch();
  const { basicDate, currentDate } = useSelector((store: IStore) => store.calendar);
  const { email } = useSelector((store: IStore) => store.auth.user);

  const handleCurrentDateButtonClick = () => {
    dispatch(updateSelectedDate(currentDate!));
    dispatch(updateDataMonth(currentDate!));
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
              {MONTH_NAMES[basicDate!.getMonth()]}{" "}
              {basicDate!.getFullYear()}
            </h2>
            <Link to="/calendar" className="button header__button button__add">
              calendar
            </Link>
            <Link to="/calendar/segment" className="button header__button button__add">
              all notes
            </Link>
            <Link
              to="/calendar/day"
              className="button header__button button__add"
              onClick={handleCurrentDateButtonClick}
            >
              today
            </Link>
          </div>

          <Link to="/logout" className="button header__button button__add">
            logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
