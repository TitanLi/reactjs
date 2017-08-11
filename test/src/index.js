import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Name extends React.Component{
  render(){
    return <h1>Google</h1>
  }
}

class GoogleUrl extends React.Component{
  render(){
    return <a href={this.props.googleUrl}>{this.props.googleUrl}</a>
  }
}

class Main extends React.Component{
  render(){
    return (
      <div>
        <Name />
        <GoogleUrl googleUrl={this.props.googleUrl}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main googleUrl="http://www.google.com"/>,
  document.getElementById('root')
);
registerServiceWorker();
