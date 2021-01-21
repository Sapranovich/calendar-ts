import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { setAllStartDates, setLoaded } from "../../redux/actions";


const MainWrapper = ({ children }: { children: any }) => {
  const { isLoaded } = useSelector((store: any) => store.authReducer);
  const dispatch = useDispatch();
  const date = new Date();
  const currentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  React.useEffect(():any => {
    dispatch(setAllStartDates(currentDate));

// временный фейк-запрос
    setTimeout(() => dispatch(setLoaded(true)), 1000);
    return ()=> dispatch(setLoaded(false))
  },[]);
  
  const location = useLocation();
  return (
    <div>
      {/* MainWrapper = {location.pathname}
      <Link to="/">на главную</Link> */}
      {isLoaded ? children : <div>Загрузка</div>}
    </div>
  );
};

export default MainWrapper;
