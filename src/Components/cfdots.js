import React from 'react';


const Cell = ({ value, columnIndex, play }) => {
  let color =  'rgb(128, 128, 128)';
  if (value === 1) {
    color = 'red';
  } else if (value === 0) {
    color = 'blue';
  }

    
  return (
    <td>
      <div className="dots" onClick={() => {play(columnIndex)}}>
        <div className="dot" style={{backgroundColor: color}}></div>
      </div>
    </td>
  );
};

export default Cell;