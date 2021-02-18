import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import IStore from "../../redux/interfaceStore";
import { MainWrapper, Calendar, Header, SideBar, Modal } from "../../components";

const Main = ():JSX.Element => {
  const { isAuthenticated } = useSelector((state: IStore) => state.auth);
  const { isOpenModal } = useSelector((state: IStore) => state.modal);
  const [isOpenSideBar, setIsOpenSideBar] = React.useState(true);

  return !isAuthenticated ? (
    <Redirect to="/login" />
  ) : (
    <MainWrapper>
      <Header
        isOpenSideBar={isOpenSideBar}
        setIsOpenSideBar={setIsOpenSideBar}
      />
      <div className="main">
        <div className="wrapper">
          <div className="main__wrapper">
            <SideBar isOpenSideBar={isOpenSideBar} />
            <Calendar />
          </div>
        </div>
      </div>
      {/* {isOpenModal && <Modal />} */}
    </MainWrapper>
  );
};

export default Main;
