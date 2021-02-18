export type UserMessageDataType = {
  userId: number;
  title: string;
  message: string;
  currentHour: number;
  email: string;
  role: string;
};

export type MessagesSpecificDateType = {
  id: number;
  messages: Array<UserMessageDataType | null>;
};

export type UserMessageDataType1 = {
  userId: number;
  title: string;
  message: string;
  currentHour: number;
  email: string;
  role: string;
  dayId: number;
  id?: number;
};



