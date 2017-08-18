import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const numbers = [1,2,3,4,5,6];

function MessageMap(){
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  return(
    <ul>
      {listItems}
    </ul>
  )
}
ReactDOM.render(
  <MessageMap/>,
  document.getElementById('root')
);
