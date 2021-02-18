import { useSelector, useDispatch } from "react-redux";
import IStore from "../redux/interfaceStore";
import { USER_ROLES } from "../data";
import { requestAllMessages } from "../redux/messages/messagesActions";

export default function useIsAllMessages() {
  const { id, role } = useSelector((store: IStore) => store.auth.user);
}
