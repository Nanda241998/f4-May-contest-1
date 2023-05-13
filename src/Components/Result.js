import React from 'react';

const Result = ({ result }) => {
  return (
    <div style={{ color: 'green' }}><br></br>
      Result= {result.toFixed(2)}<br></br>
    success: Your result shown in above!
    </div>
  );
};

export default Result;
