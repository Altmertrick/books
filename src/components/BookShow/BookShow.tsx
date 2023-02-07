import { BookT } from '../../types/types';
import { useState } from 'react';
import BookEdit from '../BookEdit/BookEdit';

type PropsT = {
  book: BookT;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
};

const BookShow: React.FC<PropsT> = (props) => {
  const [editMode, setEditMode] = useState(false);

  const onDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.onDelete(props.book.id);
  };
  const onEditClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setEditMode(!editMode);
  };
  const onTitleSave = (title: string) => {
    props.onEdit(props.book.id, title);
    setEditMode(!editMode);
  };

  return (
    <div className="book-show">
      <div>
        {editMode ? (
          <BookEdit onEdit={onTitleSave} book={props.book} />
        ) : (
          <h3>{props.book.title}</h3>
        )}
      </div>
      <div className="actions">
        <button className="edit" onClick={onEditClick}>
          edit
        </button>
        <button className="delete" onClick={onDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
