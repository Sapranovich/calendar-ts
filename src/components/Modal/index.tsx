import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUpdateMessageModal from "../AddUpdateMessageModal";
import ViewMessageModal from "../ViewMessageModal";
import { closeModal, setCurrentHour } from "../../redux/actions";
import * as CONSTANTS from "../../constants";

function Modal() {
  const { modalType } = useSelector((store: any) => store.modal);
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
        {CONSTANTS.MODAL_TYPES.ADD === modalType && <AddUpdateMessageModal />}
        {CONSTANTS.MODAL_TYPES.UPDATE === modalType && (
          <AddUpdateMessageModal />
        )}
        {CONSTANTS.MODAL_TYPES.VIEW === modalType && <ViewMessageModal />}
      </div>
    </div>
  );
}

export default Modal;
