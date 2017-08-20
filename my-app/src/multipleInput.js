import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Reservation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing : true,
      numberOfGuests : 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name] : value
    });
    console.log(this.state);
  }

  handleSubmit(event){
    alert("checkbox:"+this.state.isGoing+"\nnumber:"+this.state.numberOfGuests);
    event.preventDefault();
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
          Number of guests:
          <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
