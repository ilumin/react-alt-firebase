import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore.js';

const {
  Card,
  List,
  CircularProgress
} = mui;

@connectToStores
class ChannelList extends React.Component {
  constructor (props) {
    super(props);
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  componentDidMount() {
    this.selectedChannel = this.props.params.channel;
    ChatStore.getChannels(this.selectedChannel);
  }

  componentWillReceiveProps(nextProps) {
    if (this.selectedChannel != nextProps.params.channel) {
      this.selectedChannel = nextProps.params.channel;
      ChatStore.getChannels(this.selectedChannel);
    }
  }

  render () {
    if (!this.props.channels) {
      return (
        <Card style={{flexGrow: 1}}>
          <CircularProgress
            mode="indeterminate"
            style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
              display: 'block',
              width: '60px'
            }}
          />
        </Card>
      );
    }

    var channelNodes = _(this.props.channels)
      .keys()
      .map((key) => {
        let channel = this.props.channels[key];
        return (
          <Channel channel={channel} />
        );
      })
      .value();

    return (
      <Card style={{
          flexGrow: 1
        }}>
        <List>{channelNodes}</List>
      </Card>
    );
  }
}

export default ChannelList;
