import React from "react";
import * as constants from './basicStates';
import { MainWrapper, Calendar, Header, Aside } from "../../components";

const Main = () => {
  const [stateMain, setStateMain] = React.useState(constants.MONTH);
  
  return (
    <MainWrapper>
      <Header />
      <div className="main">
        <Aside />
        <Calendar />
      </div>
    </MainWrapper>
  );
};

export default Main;
