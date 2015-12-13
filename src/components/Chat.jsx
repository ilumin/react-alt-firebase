import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import ChatStore from '../stores/ChatStore';

class Chat extends React.Component {
  static willTransitionTo(transition) {
    let state = ChatStore.getState();
    if (!state.user) {
      transition.redirect('/login');
    }
  }

  render() {
    return (
      <div>
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap'
          }}>
          <ChannelList />
          <MessageList />
        </div>
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap'
          }}>
          <MessageBox />
        </div>
      </div>
    );
  }
}

export default Chat;
