import React, { useEffect } from 'react';
import './App.css';

import BookCreate from './components/BookCreate/BookCreate';

import BookList from './components/BookList/BookList';
import useBooksContext from './hooks/use-books-context';

const App: React.FC<any> = (props) => {
  const { fetchBooks, createBook } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
