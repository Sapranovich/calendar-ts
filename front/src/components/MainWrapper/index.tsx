import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loading } from "../../pages";
import { setAllStartDates, setLoaded, requestAllMessages } from "../../redux/actions";

const MainWrapper = ({ children }: { children: any }): JSX.Element => {
  const { isLoaded } = useSelector((store: any) => store.auth);
  const dispatch = useDispatch();
  const date = new Date();
  const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  React.useEffect((): any => {
    dispatch(setAllStartDates(currentDate));
    dispatch(requestAllMessages());
    // временный фейк-запрос
    setTimeout(() => dispatch(setLoaded(true)), 1000);
    return () => dispatch(setLoaded(false));
  }, []);

  return <React.Fragment>{isLoaded ? children : <Loading />}</React.Fragment>;
};

export default MainWrapper;
