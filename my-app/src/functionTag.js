import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props){
  return <h1>Hello {props.name}</h1>;
}

function App(){
  return (
    <div>
      <Welcome name="Titan"/>
      <Welcome name="apple"/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
