import React from "react";

import CardMessage from "../../CardMessage";
import getDateInFormat from '../../../../services/getDateInFormat';
import { UserMessageDataType } from '../../../../types/messagesDataTypes';

export interface IGroupProps {
  id: number;
  messages: (UserMessageDataType | null)[];
}

export interface ISegmentGroupProps {
  group: IGroupProps;
  index: number;
}

const SegmentGroup = ({ group }: ISegmentGroupProps): JSX.Element => {
  return (
    <div className="segment-group">
      <h3 className="segment-group__date">{getDateInFormat(group.id)}</h3>
      {group.messages.map((message, index) => message && (
        <CardMessage key={index} message={message} groupId={group.id}/>
      ))}
    </div>
  );
}

export default SegmentGroup;
