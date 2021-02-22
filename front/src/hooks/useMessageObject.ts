import { useSelector } from "react-redux";
import IStore from "../redux/interfaceStore";
import { UserMessageDataType } from "../types/messagesDataTypes";
import isEmpty from "../services/isEmpty";

export default function useModalMessageObject(){
  const modalMessageObject: UserMessageDataType = useSelector((store:IStore) => store.modal.modalData);
  const { idSelectedDate, currentHour } = useSelector((store: IStore) => store.calendar);
  const { email, id, role } = useSelector((store: IStore) => store.auth.user); 

  if(!isEmpty(modalMessageObject)){
    return modalMessageObject
  }else{
    return {
      userId: id!,
      title: "",
      message: "",
      currentHour: currentHour!,
      email: email!,
      role: role!,
      dayId: idSelectedDate!,
    } 
  }
}