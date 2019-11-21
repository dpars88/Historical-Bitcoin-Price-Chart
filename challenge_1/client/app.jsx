import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Main from './src/Main.jsx';

ReactDOM.render(
  <Main url={'http://localhost:3000/events'} perPage={10} />,
  document.getElementById('app')
);
