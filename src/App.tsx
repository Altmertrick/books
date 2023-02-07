import React, { useState } from 'react';
import './App.css';

import BookCreate from './components/BookCreate/BookCreate';
import BookList from './components/BookList/BookList';
import { BookT } from './types/types';

const App: React.FC<any> = (props) => {
  const [books, setBooks] = useState<Array<BookT>>([]);

  const createBook = (title: string) => {
    const newBook = {
      id: Math.floor(Math.random() * 99999),
      title,
    };
    setBooks([...books, newBook]);
  };
  const deleteBookById = (id: number) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };
  const editBook = (id: number, title: string) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(newBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
