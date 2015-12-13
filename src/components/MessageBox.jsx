import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Actions from '../actions';

const {
  Card
} = mui;

class MessageBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  onChange (e) {
    this.setState({
      message: e.target.value
    });
  }

  onKeyUp (e) {
    if (e.keyCode === 13 && trim(e.target.value) != '') {
      e.preventDefault();

      Actions.sendMessage(this.state.message);

      this.setState({
        message: ''
      });
    }
  }

  render () {
    return (
      <Card style={{
          flexGrow: 1
        }}>
        <textarea
          value={this.state.message}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          style={{
            width: '100%',
            display: 'block',
            boxSizing: 'border-box',
            margin: '0',
            border: 'none',
            resize: 'none',
            minHeight: 50,
            outline: 'auto 0px'
          }} />
      </Card>
    );
  }
}

export default MessageBox;
