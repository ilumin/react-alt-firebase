import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;
let MessageSource = {
  sendMessage: {
    remote(state) {
      
    },
    success: Actions.messageSendSuccess,
    error: Actions.messageSendError
  },
  getMessages: {
    remote(state) {
      if (firebaseRef) {
        firebaseRef.off();
      }
      firebaseRef = new Firebase('https://luminous-torch-3780.firebaseio.com/messages/' + state.selectedChannel.key);
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapshot) => {
          var messages = dataSnapshot.val();
          resolve(messages);
        });
      });
    },
    loading: Actions.messagesLoading,
    success: Actions.messagesReceived,
    error: Actions.messagesFailed
  }
}

export default MessageSource;
