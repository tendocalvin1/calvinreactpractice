import React from 'react';
import PropTypes from 'prop-types';
import './BookList.css';

function BookList() {
  // Sample array of book objects
  const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
  ];

  return (
    <div className="booklist">
      <h2>Book List</h2>
      {books.map((book) => (
        <p key={book.id}>
          Title: {book.title}, Author: {book.author}
        </p>
      ))}
    </div>
  );
}

// PropTypes (optional, since no props are passed in this version)
BookList.propTypes = {
  // If you want to pass books as props, uncomment and adjust:
  // books: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     title: PropTypes.string.isRequired,
  //     author: PropTypes.string.isRequired,
  //   })
  // ),
};

export default BookList;