import { BookT } from '../../types/types';
import BookShow from '../BookShow/BookShow';
import { useContext } from 'react';
import BooksContext from '../../context/books';

type PropsT = {
  books: Array<BookT>;
};

const BookList: React.FC<any> = (props) => {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = props.books.map((book: any) => (
    <BookShow
      book={book}
      key={book.id}
      onDelete={props.onDelete}
      onEdit={props.onEdit}
    />
  ));

  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Increment</button>
      {renderedBooks}
    </div>
  );
};

export default BookList;
