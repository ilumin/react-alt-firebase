import alt from '../alt';
import Firebase from 'firebase';

class Actions {

  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'sendMessage',
      'messageReceived',
      'messageSendSuccess',
      'messageSendError',
      'messagesLoading'
    );
  }

  login (router) {
    return (dispatch) => {
      let firebaseRef = new Firebase('https://luminous-torch-3780.firebaseio.com');
      firebaseRef.authWithOAuthPopup('google', (error, user) => {
        if (error) {
          return;
        }

        dispatch(user);

        router.transitionTo('/chat');
      });
    }
  }

}

export default alt.createActions(Actions);
