import React from 'react';

const NumberComponent = ({ number }) => {
  const isEven = number % 2 === 0;

  const styles = {
    backgroundColor: isEven ? 'lightblue' : 'pink',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
  };

  return (
    <div style={styles}>
      <p>Number: {number}</p>
      <p>{isEven ? 'Even' : 'Odd'}</p>
    </div>
  );
};

export default NumberComponent;
