import React from 'react';
import MessageList from './MessageList.jsx';
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
        <MessageList />
      </div>
    );
  }
}

export default App;
