import React from "react";
import { useDispatch, useSelector } from "react-redux";

import IStore from "../../redux/interfaceStore";
import AddUpdateMessageModal from "../AddUpdateMessageModal";
import ViewMessageModal from "../ViewMessageModal";
import { closeModal, setCurrentHour } from "../../redux/actions";

import { MODAL_TYPES } from '../../data';

function Modal():JSX.Element {
  const { modalType } = useSelector((store: IStore) => store.modal);
  const dispatch = useDispatch();

  const handleCloseButtonClick = () => {
    dispatch(setCurrentHour(null));
    
    dispatch(closeModal());
  };

  return (
    <div className="modal modal_visibility">
      <div className="modal__wrapper">
        <span
          className="modal__close-button"
          onClick={handleCloseButtonClick}
        ></span>
        {MODAL_TYPES.ADD === modalType && <AddUpdateMessageModal />}
        {MODAL_TYPES.UPDATE === modalType && <AddUpdateMessageModal />}
        {MODAL_TYPES.VIEW === modalType && <ViewMessageModal />}
      </div>
    </div>
  );
}

export default Modal;
