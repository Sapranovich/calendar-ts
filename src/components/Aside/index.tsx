import React from "react";
import {useDispatch, useSelector} from 'react-redux';

import WidgetCalendar from '../Calendar/WidgetCalendar';
import UsersList from '../UsersList';
const Aside = () => {
  const { role } = useSelector((store: any) => store.authReducer.user);

  return (
    <div className="aside">
      <WidgetCalendar />
      {role === 'admin' ? <UsersList/> : null}
    </div>
  );
};

export default Aside;