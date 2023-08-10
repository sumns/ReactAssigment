import React, { useState } from 'react';
import Row from './Row';

const Theater = () => {
  const rows = ['A', 'B', 'C',];
  const cols = 5;

  // Simulated booked seats
  const bookedSeats = ['B2', 'B3', 'D4', 'D5'];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (row, col) => {
    const seat = `${row}${col}`;

    if (bookedSeats.includes(seat)) {
      return; 
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="theater">
      {rows.map(row => (
        <Row
          key={row}
          rowName={row}
          seats={Array.from({ length: cols }, (_, i) => i + 1)}
          bookedSeats={bookedSeats}
          selectedSeats={selectedSeats}
          onSelect={handleSeatSelect}
        />
      ))}
    </div>
  );
};

export default Theater;
