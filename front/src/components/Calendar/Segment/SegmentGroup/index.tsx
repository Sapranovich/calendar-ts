import React from "react";

import CardMessage from "../../CardMessage";
import getDateInFormat from '../../../../services/getDateInFormat';
import { SegmentGroupPropsType } from '../../../../types/segmentGroupTypes';

const SegmentGroup = ({ group }: SegmentGroupPropsType): JSX.Element => {
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
