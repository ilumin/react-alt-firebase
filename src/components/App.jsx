import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import mui from 'material-ui';
// import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const {
  Styles
} = mui;

const ThemeManager = Styles.ThemeManager;
const LightRawTheme = Styles.LightRawTheme;
const AppBar = mui.AppBar;

// babel6 not support decorate
// @connectToStores
class App extends React.Component {
  constructor () {
    super();

    this.state = ChatStore.getState();
  }

  componentDidMount() {
    ChatStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    ChatStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  }

  render () {
    var view = <Login />;

    if (this.state.user || 1) {
      view = <div>
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
      </div>;
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
