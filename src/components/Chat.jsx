import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

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
