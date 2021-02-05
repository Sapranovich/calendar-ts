import React from "react";
import { useDispatch, useSelector } from "react-redux";

import IStore from "../../redux/interfaceStore";
import { Loading } from "../../pages";
import { setAllStartDates, setLoaded, requestAllMessages } from "../../redux/actions";

const MainWrapper = ({ children }: { children:any }): JSX.Element => {
  const { isLoaded } = useSelector((store: IStore) => store.auth);
  const dispatch = useDispatch();

  React.useEffect(():()=> void => {
    const date = new Date();
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    dispatch(setAllStartDates(currentDate));
    dispatch(requestAllMessages());
    // временная фейк-запрос
    setTimeout(() => dispatch(setLoaded(true)), 1000);
    return () => dispatch(setLoaded(false));
  }, [dispatch]);

  return <React.Fragment>{isLoaded ? children : <Loading />}</React.Fragment>;
};

export default MainWrapper;