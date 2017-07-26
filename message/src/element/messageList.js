import React,{Component} from 'react';

class MessageList extends Component{
  render(){
    const messages = this.props.item;   //接收變數
    const message = messages.map((m,index) =>
    <div key={index}>
      {m.name}
      {m.content}
    </div>
  );

    return(
      <div>
        MessageList
        {message}
      </div>
    );
  }
}

export default MessageList;
