import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const selectName = {
  c : 'Celsius',
  f : 'Fahrenheit'
}

function TemComponent(props){
  return(
    <fieldset>
      <legend>Enter temperature in {selectName[props.select]}</legend>
      <input value={props.temperature} onChange={props.changeFun}/>
    </fieldset>
  );
}

class Temperature extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Celsius:'',
      Fahrenheit:''
    }

    this.celsiusFun = this.celsiusFun.bind(this);
    this.fahrenheitFun = this.fahrenheitFun.bind(this);
  }

  celsiusFun(event){
    console.log(event.target.value);
    var data = event.target.value;
    this.setState({
      Celsius:data,
      Fahrenheit:data*9/5+32
    });
  }

  fahrenheitFun(event){
    var data = event.target.value;
    this.setState({
      Celsius:(data-32)*5/9,
      Fahrenheit:data
    });
  }

  render(){
    return(
      <div>
        <TemComponent select={'c'} temperature={this.state.Celsius} changeFun={this.celsiusFun}/>
        <TemComponent select={'f'} temperature={this.state.Fahrenheit} changeFun={this.fahrenheitFun}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Temperature />,
  document.getElementById('root')
);
