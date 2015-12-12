import alt from '../alt';
import Actions from '../actions';
// import {decorate, bind, datasource} from 'alt/utils/decorators';

// @decorate(alt)
class ChatStore {

  constructor() {
    this.state = {user: 'yeahh'};

    // babel6 bind pattern
    this.bindListeners({
      login: Actions.LOGIN
    });
  }

  // decorators is deprecate on babel6
  // @bind(Actions.login)
  login(user) {
    this.setState({user: user})
  }

}

export default alt.createStore(ChatStore);
