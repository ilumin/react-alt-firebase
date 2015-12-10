import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
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
            display: 'flex',
            flexFlow: 'row wrap',
            maxWidth: 1200,
            with: '100%'
          }}>
          <ChannelList />
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;
