import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const {
  Styles,
  AppBar
} = mui;

const ThemeManager = new Styles.ThemeManager();
// const LightRawTheme = Styles.LightRawTheme;

@connectToStores
class App extends React.Component {
  constructor () {
    super();
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render () {
    var view = <Login />;

    if (this.props.user) {
      view = (
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

    return (
      <div>
        <AppBar title="React Chat" />
        {view}
      </div>
    );
  }
}

export default App;
