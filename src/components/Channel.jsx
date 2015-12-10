import React from 'react';
import mui from 'material-ui';

const {
  ListItem
} = mui;

class Channel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ListItem>{this.props.message}</ListItem>
    );
  }
}

export default Channel;
