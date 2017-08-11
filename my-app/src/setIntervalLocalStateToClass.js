import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
//When this Class output is inserted in the DOM, React calls the componentDidMount() lifecycle hook
  componentDidMount(){
    this.timer = setInterval(
      () => {this.tick()},
      1000
    );
  }
//If this Class component is ever removed from the DOM, React calls the componentWillUnmount()
  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    this.setState({
      date:new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>Hello Titan</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
