import React from "react";
import { useDispatch, useSelector } from "react-redux";

import WidgetMonth from '../Calendar/WidgetMonth';
import UsersList from "../UsersList";
const SideBar = ({ isOpenSideBar }: { isOpenSideBar: boolean }) => {
  const { role } = useSelector((store: any) => store.auth.user);

  return (
    <div className={`side-bar ${isOpenSideBar ? "side-bar_visible" : ""}`}>
      <WidgetMonth />
      {role === "admin" ? <UsersList /> : null}
    </div>
  );
};

export default SideBar;
