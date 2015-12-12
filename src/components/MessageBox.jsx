import React from 'react';
import mui from 'material-ui';

const {
  Card
} = mui;

class MessageBox extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Card style={{
          flexGrow: 1
        }}>
        <textarea style={{
            width: '100%',
            display: 'block',
            boxSizing: 'border-box',
            margin: '0',
            border: 'none',
            resize: 'none',
            minHeight: 50,
            outline: 'auto 0px'
          }}/>
      </Card>
    );
  }
}

export default MessageBox;
