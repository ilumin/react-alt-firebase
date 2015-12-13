import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const {
  Card,
  CircularProgress,
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
    if (!this.props.messagesLoading) {
      messageNodes = _.values(this.props.messages).map( (message) => {
        return (
          <Message message={message} />
        );
      });
    }
    else {
      messageNodes = (
        <CircularProgress
          mode="indeterminate"
          style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            margin: '0 auto',
            display: 'block',
            width: '60px'
          }}
        />
      );
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
