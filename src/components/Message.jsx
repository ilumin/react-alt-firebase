import React from 'react';
import mui from 'material-ui';

const {
  ListItem,
  Avatar
} = mui;

class Message extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ListItem
        leftAvatar={<Avatar src="https://scontent.fbkk1-1.fna.fbcdn.net/hprofile-prn2/v/t1.0-1/c0.2.50.50/p50x50/10374072_10205034569129105_8632703914164586864_n.jpg?oh=ac2967ab4a363f3428f306007896c7c9&oe=56E19D46" />}
        >{this.props.message}</ListItem>
    );
  }
}

export default Message;
