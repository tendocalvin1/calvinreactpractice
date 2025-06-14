import React,  {useState} from 'react';

function NumberList(){
    
        const numbers = [2,4,8,5,9,23,6];

  return (
    <div>
      <h2>Numbers</h2>
      <ol>
        {numbers.map((numbers, index) => (
          <li key={index}>{numbers}</li>
        ))}
      </ol>
    </div>
  );
  
}


export default NumberList