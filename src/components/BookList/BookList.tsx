import { BookT } from '../../types/types';
import BookShow from '../BookShow/BookShow';

type PropsT = {
  books: Array<BookT>;
};

const BookList: React.FC<any> = (props) => {
  const renderedBooks = props.books.map((book: any) => (
    <BookShow
      book={book}
      key={book.id}
      onDelete={props.onDelete}
      onEdit={props.onEdit}
    />
  ));

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
