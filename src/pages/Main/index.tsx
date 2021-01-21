import React from "react";
import { MainWrapper, Calendar, Header, SideBar } from "../../components";
import {useSelector} from 'react-redux';
import Modal from '../Modal';

const Main = () => {
  const { isOpenModal } = useSelector( (state: any) => state.modal );
  const [isOpenSideBar, setIsOpenSideBar] = React.useState(false);

  return (
    <MainWrapper>
      <Header isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
      <main className="main">
        <SideBar isOpenSideBar={isOpenSideBar} />
        <Calendar />
      </main>
      { isOpenModal && <Modal /> }
    </MainWrapper>
  );
};

export default Main;
