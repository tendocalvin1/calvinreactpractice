import React from 'react';
import PropTypes from 'prop-types';


function ShoppingCart() {
  
  const products = [
    { id: 1, name: 'To Kill a Mockingbird', price:2000},
    { id: 2, name: 'laptop', price:4000 },
    { id: 3, name: 'Refrigerator', price:3000},
  ];

  return (
    <div className="booklist">
      <h2>Book List</h2>
      {products.map((product) => (
        <table key={product.id}>
          Name: {product.title}, price: {product.price}
        </table>
      ))}
    </div>
  );
}

// PropTypes (optional, since no props are passed in this version)
ShoppingCart.propTypes = {
  // If you want to pass books as props, uncomment and adjust:
  // books: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     title: PropTypes.string.isRequired,
  //     author: PropTypes.string.isRequired,
  //   })
  // ),
};

export default ShoppingCart;