import isEmpty from "./isEmpty";
import { UserMessageDataType } from "../types/messagesDataTypes";


export default function filterMessagesByDates(defaultMessages:UserMessageDataType[], indexStartParam?: number, indexEndParam?: number){

  if(isEmpty(indexStartParam) && isEmpty(indexEndParam)) return defaultMessages;
  
  return defaultMessages.filter((el: UserMessageDataType) => el.id! <= indexStartParam! && el.id! >= indexEndParam!);
}