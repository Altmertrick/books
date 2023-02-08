import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

import BookCreate from './components/BookCreate/BookCreate';
import BookList from './components/BookList/BookList';
import { BookT } from './types/types';

const App: React.FC<any> = (props) => {
  const [books, setBooks] = useState<Array<BookT>>([]);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:3001/books');
    setBooks([...res.data]);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title: string) => {
    const res = await axios.post('http://localhost:3001/books', {
      title,
    });
    const newBooks = [...books, res.data];
    setBooks(newBooks);
  };
  const editBook = async (id: number, title: string) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(newBooks);
  };
  const deleteBookById = async (id: number) => {
    const res = await axios.delete(`http://localhost:3001/books/${id}`);

    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
