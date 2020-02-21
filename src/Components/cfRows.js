import React from 'react';
import Cell from './cfdots.js';

// const Row = ({ row, play }) => {

// 	return <tr>{row && row.map((cell, i) => {
// 		return <Dots key={i} value={cell} columnIndex={i} play={play} />}
// 	)}</tr>
// };

const Row = ({ row, play }) => {
	return (
	  <tr>
		{row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
	  </tr>
	);
  };
export default Row;