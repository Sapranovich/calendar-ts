import { UserMessageDataType1 } from "../types/messagesDataTypes";

export default function groupMessagesByDay(messages: UserMessageDataType1[]) {
  const daysId = Array.from(new Set(messages.map((el) => el.dayId)));
  return daysId.map(id => {
    const daysId = id ? { groupId: id } : null;
    return {
      ...daysId,
      messages: messages.filter(device => device.dayId === id)
    };
  });
}
