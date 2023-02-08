import { BookT } from '../../types/types';
import BookShow from '../BookShow/BookShow';
import { useContext } from 'react';
import BooksContext from '../../context/books';

type PropsT = {};

const BookList: React.FC<any> = (props) => {
  const { books, editBookById, deleteBookById } = useContext(BooksContext);

  const renderedBooks = books.map((book: any) => (
    <BookShow
      book={book}
      key={book.id}
      onDelete={deleteBookById}
      onEdit={editBookById}
    />
  ));

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
