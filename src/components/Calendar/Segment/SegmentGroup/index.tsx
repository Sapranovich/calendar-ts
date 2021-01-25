import React from "react";
import CardMessage from "../../CardMessage";
import getDateInFormat from '../../../../services/getDateInFormat';
import { IUserMessageDataProps } from "../../../../redux/messages/messagesActions";

export interface IGroupProps {
  id: number;
  messages: IUserMessageDataProps[];
}

export interface ISegmentGroupProps {
  group: IGroupProps;
  index: number;
}
function SegmentGroup({ group, index }: ISegmentGroupProps) {
  return (
    <div className="segment__group">
      <h3 className="segment__date">{getDateInFormat(group.id)}</h3>
      {group.messages.map((message, index) => message && (
        <CardMessage key={index} message={message} groupId={group.id}/>
      ))}
    </div>
  );
}

export default SegmentGroup;
