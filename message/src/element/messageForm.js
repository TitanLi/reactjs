import React,{Component} from 'react';

class MessageForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      content:''
    }
  }

  handleName(event){
    this.setState({     //更新state值
      name:event.target.value
    });
    console.log(event.target.value);
  }

  handleContent(event){
    this.setState({
      content:event.target.value
    });
  }

  handleSubmit(){
    let inputMessage={name:this.state.name,content:this.state.content};     //使用this.state
    this.props.handleItem(inputMessage);      //將值傳回上一層
  }
  render(){
    return(
      <div>
        name:
        <input onChange={this.handleName.bind(this)}></input>
        content:
        <input onChange={this.handleContent.bind(this)}></input>
        <button onClick={this.handleSubmit.bind(this)}>sent</button>
      </div>
    );
  }
}

export default MessageForm;
