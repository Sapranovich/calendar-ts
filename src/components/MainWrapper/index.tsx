import React from "react";
import { useLocation } from 'react-router-dom';
const MainWrapper = ({ children }: { children: any }) => {
  const location = useLocation();
  return (
    <div>
      MainWrapper = {location.pathname}
      {children}
    </div>
  );
};

export default MainWrapper;
