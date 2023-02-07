import { useState } from 'react';
type PropsT = {};

const BookEdit: React.FC<any> = (props) => {
  const [title, setTitle] = useState(props.book.title);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onEdit(title);
    setTitle(' ');
  };

  return (
    <form className="book-edit" onSubmit={onFormSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={onTitleChange} />
      <button className="button is-primary">save</button>
    </form>
  );
};

export default BookEdit;
