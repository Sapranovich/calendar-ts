import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  MainWrapper,
  Calendar,
  Header,
  SideBar,
  Modal,
} from "../../components";

const Main = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const { isOpenModal } = useSelector((state: any) => state.modal);
  const [isOpenSideBar, setIsOpenSideBar] = React.useState(true);

  return !isAuthenticated ? (
    <Redirect to="/login" />
  ) : (
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
