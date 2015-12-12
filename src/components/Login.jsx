import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {
  Card,
  CardText,
  RaisedButton
} = mui;

class Login extends React.Component {

  onClick() {
    Actions.login();
  }

  render() {
    return (

    );
  }

}

export default Login;
