import React from "react";
import { useSelector } from "react-redux";

import Modal from "../Modal";
import { MainWrapper, Calendar, Header, SideBar } from "../../components";


const Main = () => {
  const { isOpenModal } = useSelector((state: any) => state.modal);
  const [isOpenSideBar, setIsOpenSideBar] = React.useState(true);

  return (
    <MainWrapper>
      <Header
        isOpenSideBar={isOpenSideBar}
        setIsOpenSideBar={setIsOpenSideBar}
      />
      <main className="main">
        <div className="wrapper">
          <div className="main__wrapper">
            <SideBar isOpenSideBar={isOpenSideBar} />
            <Calendar />
          </div>
        </div>
      </main>
      {isOpenModal && <Modal />}
    </MainWrapper>
  );
};

export default Main;
