import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from './alt-store';

@connectToStores
class MessageComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: null
    }
  }

  static getStores () {
    return [ChatStore];
  }

  static getPropsFromStores () {
    return ChatStore.getState();
  }

  render () {
    // render React DOM
  }
}

export default MessageComponent;
