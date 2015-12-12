import alt from '../alt';
import Actions from '../actions';
// import {decorate, bind, datasource} from 'alt/utils/decorators';
import ChannelSource from '../sources/ChannelSource';
import _ from 'lodash';

// @datasource(ChannelSource)
// @decorate(alt)
class ChatStore {

  constructor() {
    this.state = {user: null};

    // babel6 bind pattern
    this.bindListeners({
      login: Actions.LOGIN,
      receivedChannels: Actions.CHANNELS_RECEIVED
    });
  }

  // @bind(Action.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel;

    _(channels)
      .keys()
      .each((key, index) => {
        channels[key].key = key;
        if (index == 0) {
          channels[key].selected = true;
          selectedChannel = channels[key];
        }
      })
      .value();

    this.seState({
      channels,
      selectedChannel
    });
  }

  // decorators is deprecate on babel6
  // @bind(Actions.login)
  login(user) {
    this.setState({user: user})
  }

  getChannels() {
    ChannelSource.getChannels();
  }

}

export default alt.createStore(ChatStore);
