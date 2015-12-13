import React from 'react';
import mui from 'material-ui';
import {RouteHandler} from 'react-router';

const {
  Styles,
  AppBar
} = mui;

const ThemeManager = new Styles.ThemeManager();

class App extends React.Component {
  constructor () {
    super();
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
    return (
      <div>
        <AppBar title="React Chat" />
        <RouteHandler />
      </div>
    );
  }
}

export default App;
