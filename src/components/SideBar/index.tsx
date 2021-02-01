import React from "react";
import { useSelector } from "react-redux";
import { BASIC_ROLES } from '../../constants';
import WidgetMonth from '../Calendar/WidgetMonth';
import UsersList from "../UsersList";
const SideBar = ({ isOpenSideBar }: { isOpenSideBar: boolean }) => {
  const { role } = useSelector((store: any) => store.auth.user);

  return (
    <div className={`side-bar ${isOpenSideBar ? "side-bar_visible" : ""}`}>
      <WidgetMonth />
      {role === BASIC_ROLES.ADMIN ? <UsersList /> : null}
    </div>
  );
};

export default SideBar;
