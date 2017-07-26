import React,{Component} from 'react';
import MessageList from './messageList';
import MessageForm from './messageForm';

class MessageBoard extends Component{
  constructor(props){     //初始化function
    super(props);
    this.state = {        //render畫面前要做的事
      item:[{name:'Allen',content:'Wellcom'},{name:'Billy',content:'HiHi'}]
    };
  };

  handleItem(inputMessage){
    let currentMessage = this.state.item;
    currentMessage.push(inputMessage);
    this.setState({
      item:currentMessage
    });
  }
  render(){
    return(
      <div>
        MessageBoard!!
        <MessageList item = {this.state.item}/>
        <MessageForm handleItem = {this.handleItem.bind(this)}/>
      </div>
    );
  }
}

export default MessageBoard;
