var AppDispatcher = require('../dispatcher');
var AppConstants = require('../constants');

class Actions {
  sayHello (message) {
    AppDispatcher.dispatch({
      actionType: AppConstants.SAY_HELLO,
      message: message
    });
  }

  sayBye (message) {
    AppDispatcher.dispatch({
      actionType: AppConstants.SAY_BYE,
      message: message
    });
  }
}

export default new Actions();
