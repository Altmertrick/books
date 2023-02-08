import React, { useContext } from 'react';
import './App.css';

import BookCreate from './components/BookCreate/BookCreate';
import BookList from './components/BookList/BookList';
import BooksContext from './context/books';

const App: React.FC<any> = (props) => {
  const { createBook } = useContext(BooksContext);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
