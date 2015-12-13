import React from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';

class Chat extends React.Component {
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
