import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

const {
  Card,
  List
} = mui;

class MessageList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: {}
    };

    this.firebaseRef = new Firebase('https://luminous-torch-3780.firebaseio.com/messages');
    this.firebaseRef.on("child_added", (message) => {
      if (this.state.messages[message.key()]) {
        return;
      }

      let messageVal = message.val();
      messageVal.key = message.key();
      this.state.messages[messageVal.key] = messageVal;
      this.setState({
        messages: this.state.messages
      })
    });
  }

  render () {
    var messageNodes = _.values(this.state.messages).map( (messageItem) => {
      return (
        <Message message={messageItem.message} />
      );
    });

    return (
      <Card style={{
          flexGrow: 2
        }}>
        <List>{messageNodes}</List>
      </Card>
    );
  }
}

export default MessageList;
