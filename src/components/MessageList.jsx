import React from 'react';

class MessageList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: [
        'HI THERE HOW ARE YOU!',
        'I AM FINE!'
      ]
    };
  }

  render () {
    var messageNodes = this.state.messages.map( (message) => {
      return (
        <div>{message}</div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default MessageList;
