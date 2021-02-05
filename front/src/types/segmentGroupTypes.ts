import { UserMessageDataType } from './messagesDataTypes';

export type GroupPropsType = {
  id: number;
  messages: (UserMessageDataType | null)[];
}

export type SegmentGroupPropsType = {
  group: GroupPropsType;
  index: number;
}