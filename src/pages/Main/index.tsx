import React from "react";
import { MainWrapper, Calendar, Header, SideBar } from "../../components";

const Main = () => {
  const [isOpenSideBar, setIsOpenSideBar] = React.useState(false);
  return (
    <MainWrapper>
      <Header isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
      <main className="main">
        <SideBar isOpenSideBar={isOpenSideBar} />
        <Calendar />
      </main>
    </MainWrapper>
  );
};

export default Main;
