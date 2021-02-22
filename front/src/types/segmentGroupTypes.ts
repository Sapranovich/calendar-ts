import { UserMessageDataType } from './messagesDataTypes';

export type GroupPropsType = {
  groupId: number;
  messages: UserMessageDataType[];
}

export type SegmentGroupPropsType = {
  groupId: number;
  messages: UserMessageDataType[];
}