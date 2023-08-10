import React from 'react';
import Seat from './Seat';

const Row = ({ rowName, totalSeats, bookedSeats, selectedSeats, onSelect }) => (
  <div className="row">
    {Array.from({ length: totalSeats }, (_, index) => index + 1).map(seatNumber => (
      <Seat
        key={seatNumber}
        seatNumber={`${rowName}${seatNumber}`}
        isBooked={bookedSeats.includes(`${rowName}${seatNumber}`)}
        isSelected={selectedSeats.includes(`${rowName}${seatNumber}`)}
        onSelect={onSelect}
      />
    ))}
  </div>
);

export default Row;
