import React from "react";
import * as CONSTANTS from "../../../constants";
import Day from "../Day";
function Week() {
  return (
    <div className="week-list">
      <div className="week-list__header">
        {CONSTANTS.WEEK_DAY_NAMES.map((name, index) => (
          <span key={index} className="week-list__day-name">
            {name}
          </span>
        ))}
      </div>
      <div className="week-list__group">
        {Array(7)
          .fill(null)
          .map((data, index) => (
            <Day isWeek={true}/>
          ))}
      </div>
    </div>
  );
}

export default Week;
