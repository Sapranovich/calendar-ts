import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { setData, setAllStartDates, setLoaded } from "../../redux/actions";





import monthData from '../../services/monthData';
const MainWrapper = ({ children }: { children: any }) => {
  const { isLoaded } = useSelector((store: any) => store.authReducer);
  const dispatch = useDispatch();
  const date = new Date();
  const currentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const currentDataCalendar = monthData(currentDate.getFullYear(), currentDate.getMonth())

  React.useEffect(():any => {
    // набросано всякого... нужно продумать что и как должно быть, и когда что прогружаться 
    // возможно нужно перенести данную обертку в App.tsx
    // console.log(currentDate, currentDataCalendar)
    dispatch(setAllStartDates(currentDate));
    dispatch(setData(currentDataCalendar));
// временный фейк-запрос
    setTimeout(() => dispatch(setLoaded(true)), 1000);
    return ()=> dispatch(setLoaded(false))
  },[]);
  

  const location = useLocation();

  return (
    <div>
      MainWrapper = {location.pathname}
      <Link to="/">на главную</Link>
      {isLoaded ? children : <div>Загрузка</div>}
    </div>
  );
};

export default MainWrapper;
