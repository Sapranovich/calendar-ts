import { UserMessageDataType } from "../types/messagesDataTypes";

function groupMessagesByDay(messages: UserMessageDataType[]) {
  const daysId = Array.from(new Set(messages.map((el) => el.dayId)));
  return daysId.map(id => {
    const daysId = id ? { groupId: id } : null;
    return {
      ...daysId,
      messages: messages.filter(device => device.dayId === id)
    };
  });
}

export default groupMessagesByDay
