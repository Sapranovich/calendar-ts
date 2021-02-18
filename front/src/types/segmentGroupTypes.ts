import { UserMessageDataType, UserMessageDataType1 } from './messagesDataTypes';

export type GroupPropsType = {
  groupId: number;
  messages: UserMessageDataType1[];
}

export type SegmentGroupPropsType = {
  groupId: number;
  messages: UserMessageDataType1[];
}