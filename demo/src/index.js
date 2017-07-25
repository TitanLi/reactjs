import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js';

const myStyle = {
  fontSize:100,
  color:'#FF0000',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

class Welcome extends React.Component{
  render(){
    return <h3>Hello Titan</h3>
  }
}

//Component傳遞props
class Param extends React.Component{
  render(){
    return <h1>Hello {this.props.name}</h1>;
  }
}

//外層不能有兩個標籤，要用div包起來
class Label extends React.Component{
  render(){
    return(
      <div>
        <h1>1</h1>
        <h2>2</h2>
        <h3>3</h3>
      </div>
    );
  }
}

//加入CSS樣式
ReactDOM.render(
  <h1 style={myStyle}>Hello css</h1>,document.getElementById('css')
);

//復合Component
class Name extends React.Component{
  render(){
    return <h1>{this.props.name}</h1>;
  }
}

class Site extends React.Component{
  render(){
    return <a href={this.props.site}>{this.props.site}</a>;
  }
}

class ComponentApp extends React.Component{
  render(){
    return(
      <div>
        <Name name={this.props.name} />
        <Site site={this.props.site} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Welcome />,document.getElementById('message'));
ReactDOM.render(<Param name="param" />,document.getElementById('param'));
ReactDOM.render(<Label />,document.getElementById('label'));
ReactDOM.render(<ComponentApp name="Google" site="www.google.com" />,document.getElementById('componentApp'));
ReactDOM.render(<Home />,document.getElementById('home'));
