import React from "react";

const Column = ({ top, bottom }) => {
  return (
    <div className="row mb2">
      <div className="col-md-12">{top}</div>
      <div className="col-md-12">{bottom}</div>
    </div>
  );
};

export default Column;
