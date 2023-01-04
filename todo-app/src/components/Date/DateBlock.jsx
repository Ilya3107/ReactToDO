import React from "react";
import "./date.scss";

function DateBlock({ data }) {
  return (
    <div className="date">
      <div className="date__body">
        <div className="date__information">{data.toString()}</div>
      </div>
    </div>
  );
}

export default DateBlock;
