import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { setData, setAllStartDates, setLoaded } from "../../redux/actions";

import jwt_decode from "jwt-decode";

import setAuthToken from "../../services/setAuthToken";
import { setAuthUser } from "../../redux/actions";
import { IAuthUser, IDecodedToken } from "../../components/SignInForm";


import monthData from '../../services/monthData';
import authReducer from "../../redux/auth/authReducer";
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
  
  React.useEffect(() => {
    if (localStorage.accessToken) {
      const decodedToken: IDecodedToken = jwt_decode(localStorage.accessToken);
      const currentTime = Date.now() / 1000;
      // decodedToken.exp < currentTime
      if (false) {
      } else {
        setAuthToken(localStorage.accessToken);
        const user: IAuthUser = {
          email: decodedToken.email,
          sub: decodedToken.sub,
        };
        dispatch(setAuthUser(user));
      }
    }
  }, [dispatch]);

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
