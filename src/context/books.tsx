import { createContext, useState } from 'react';

const BooksContext = createContext({ count: 0, incrementCount: () => {} });

export const Provider: React.FC<any> = (props) => {
  const [count, setCount] = useState(0);

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
