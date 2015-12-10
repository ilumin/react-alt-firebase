import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';

const {
  Styles
} = mui;

const ThemeManager = Styles.ThemeManager;
const DarkRawTheme = Styles.DarkRawTheme;
const AppBar = mui.AppBar;

class App extends React.Component {
  constructor () {
    super();
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(DarkRawTheme)
    };
  }

  render () {
    return (
      <div>
        <AppBar title="React Chat" />
        <div style={{
            maxWidth: 1200,
            margin: '0 auto'
          }}>
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
      </div>
    );
  }
}

export default App;
