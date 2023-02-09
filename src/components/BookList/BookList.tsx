import { BookT } from '../../types/types';
import BookShow from '../BookShow/BookShow';

import useBooksContext from '../../hooks/use-books-context';

type PropsT = {};

const BookList: React.FC<any> = (props) => {
  const { books, editBookById, deleteBookById } = useBooksContext();

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
