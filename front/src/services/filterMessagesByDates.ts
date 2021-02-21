import isEmpty from "./isEmpty";
import { UserMessageDataType1 } from "../types/messagesDataTypes";


export default function filterMessagesByDates(defaultMessages:UserMessageDataType1[], indexStartParam?: number, indexEndParam?: number){

  if(isEmpty(indexStartParam) && isEmpty(indexEndParam)) return defaultMessages;
  
  return defaultMessages.filter((el: UserMessageDataType1) => el.id! <= indexStartParam! && el.id! >= indexEndParam!);
}