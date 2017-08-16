import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Fun(){
  console.log('apple');
  return;
}

class Btn extends React.Component{
  render(){
    return(
      <button onClick={Fun}> {/*<button onclick="Fun()">*/}
        activeFun
      </button>
    );
  }
}

ReactDOM.render(
  <Btn />,
  document.getElementById('root')
);
