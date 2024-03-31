import React from 'react';
import NumberComponent from './evenodd';

const Apps= () => {
  return (
    <div>
      <NumberComponent number={4} />
      <NumberComponent number={3} />
    </div>
  );
};

export default Apps;
