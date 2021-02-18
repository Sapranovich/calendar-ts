import React from "react";

import CardMessage from "../../CardMessage";
import getDateInFormat from "../../../../services/getDateInFormat";
import { GroupPropsType } from "../../../../types/segmentGroupTypes";

const SegmentGroup = ({ group }: { group: GroupPropsType }): JSX.Element => {
  return (
    <div className="segment-group">
      <h3 className="segment-group__date">{getDateInFormat(group.groupId)}</h3>
      {group.messages.map((message, index) => message && (
        <CardMessage key={index} message={message} groupId={group.groupId}/>
      ))}
    </div>
  );
};

export default SegmentGroup;
