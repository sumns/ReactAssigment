import React from 'react';

const Seat = ({ row, col, isSelected, onSelect }) => (
  <div
    className={`seat ${isSelected ? 'selected' : ''}`}
    onClick={() => onSelect(row, col)}
  >
    {row}
    {col}
  </div>
);

export default Seat;
