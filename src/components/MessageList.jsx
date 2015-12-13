import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const {
  Card,
  List
} = mui;

@connectToStores
class MessageList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: {}
    };
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render () {
    let messageNodes = null;
    if (this.props.messages) {
      messageNodes = _.values(this.props.messages).map( (messageItem) => {
        return (
          <Message message={messageItem.message} />
        );
      });
    }

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
