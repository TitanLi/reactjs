import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FunBoolean extends React.Component{
  constructor(props){
    super(props);
    this.state = {isBoolean : true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({       //取得this.state value
      isBoolean : !prevState.isBoolean
    }));
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isBoolean ? 'NO' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <FunBoolean />,
  document.getElementById('root')
);
