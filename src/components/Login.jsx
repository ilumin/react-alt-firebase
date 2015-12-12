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
      <Card style={{'padding': '50px'}}>
        <CardText style={{'textAlign': 'center'}}>
          To start chatting, please login with your Google account
          <RaisedButton onClick={this.onClick.bind(this)} />
        </CardText>
      </Card>
    );
  }

}

export default Login;
