import { useState } from 'react';

type PropsT = {};

const BookCreate: React.FC<any> = (props) => {
  const [title, setTitle] = useState(' ');

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onCreate(title);
    setTitle(' ');
  };

  return (
    <div className="book-create">
      <h3>Add Book</h3>

      <form onSubmit={onFormSubmit}>
        <label>Title</label>
        <input className="input" onChange={onTitleChange} value={title} />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
