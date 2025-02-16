import React from 'react';
import MessageApp from './Message'; 
import Counter  from './Counter';
import FunCounter from './FunCounter';
import AppRouter from './AppRouter';
import ListImages from './ListImages';
import { BookList } from './BookList';
const App = () => {
  return (
    <div>
      <MessageApp />
      <h2> counter using clases</h2>
      <Counter/>
      <h2>counter using function meth</h2>
      <FunCounter/>
      <h2>app router</h2>
       <AppRouter /> 
       <h2>images</h2>
       <ListImages/>
       <h2>toggles</h2>
       <BookList/>
    </div>
  );
};

export default App;
