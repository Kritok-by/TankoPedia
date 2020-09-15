import React from 'react'


const Record = ({ itemsInfo, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemsInfo[field]}</span>
    </li>
  );
};

export { Record };
