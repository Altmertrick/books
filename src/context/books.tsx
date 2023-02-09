import { createContext, useCallback, useState } from 'react';
import axios from 'axios';
import { BookT } from '../types/types';

const initialContext = {
  books: [] as Array<BookT>,
  fetchBooks: () => {},
  createBook: (title: string) => {},
  editBookById: (id: number, title: string) => {},
  deleteBookById: (id: number) => {},
};
type BooksContextT = typeof initialContext;

const BooksContext = createContext<BooksContextT>(initialContext);

export const Provider: React.FC<any> = (props) => {
  const [books, setBooks] = useState<Array<BookT>>([]);

  const fetchBooks = useCallback(async () => {
    const res = await axios.get('http://localhost:3001/books');
    setBooks([...res.data]);
  }, []);
  const createBook = async (title: string) => {
    const res = await axios.post('http://localhost:3001/books', {
      title,
    });
    const newBooks = [...books, res.data];
    setBooks(newBooks);
  };
  const editBookById = async (id: number, title: string) => {
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
    await axios.delete(`http://localhost:3001/books/${id}`);

    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const stateToShare = {
    books,
    fetchBooks,
    createBook,
    editBookById,
    deleteBookById,
  };

  return (
    <BooksContext.Provider value={stateToShare}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
