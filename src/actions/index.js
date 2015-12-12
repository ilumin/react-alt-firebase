import alt from '../alt';
import Firebase from 'firebase';

class Actions {

  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed'
    );
  }

  login (args) {
    return (dispatch) => {
      let firebaseRef = new Firebase('https://luminous-torch-3780.firebaseio.com');
      firebaseRef.authWithOAuthPopup('google', (error, user) => {
        console.log('error:', error);
        console.log('user:', user);
        if (error) {
          return;
        }

        dispatch(user);
      })
    }
  }

}

export default alt.createActions(Actions);
