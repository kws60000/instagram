import React from 'react';

const Counter = ({ number, onIncrease }) => {
  return (
    <div>
      <div>
        <button onClick={onIncrease}>+1</button>
      </div>
      {number}
    </div>
  );
};

export default Counter;
