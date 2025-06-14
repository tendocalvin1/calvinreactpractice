import React from 'react';

function FruitList() {
  const fruits = ['mangoes', 'oranges', 'bananas', 'pineapples'];

  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;