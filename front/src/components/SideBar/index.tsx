import React from "react";
import { useSelector } from "react-redux";

import IStore from "../../redux/interfaceStore";
import WidgetMonth from '../Calendar/WidgetMonth';
import UsersList from "../UsersList";

import { USER_ROLES } from '../../data';

const SideBar = ({ isOpenSideBar }: { isOpenSideBar: boolean }): JSX.Element => {
  const { role } = useSelector((store: IStore) => store.auth.user);

  return (
    <div className={`side-bar ${isOpenSideBar ? "side-bar_visible" : ""}`}>
      <WidgetMonth />
      {role === USER_ROLES.ADMIN ? <UsersList /> : null}
    </div>
  );
};

export default SideBar;
