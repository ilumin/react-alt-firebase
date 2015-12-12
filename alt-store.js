import alt from 'alt';
import Actions from './alt-actions';
import {decorate, bind} from 'alt/utils/decorators';

@decorate(alt)
class ChatStore {
  constructor () {
    super();
    this.state = {
      helloMessage: null,
      byeMessage: null
    }
  }

  @bind(Actions.sayHello)
  sayHello () {
    this.setState({
      helloMessage: true
    });
  }

  @bind(Actions.sayBye)
  sayBye () {
    this.setState({
      byeMessage: true
    });
  }
}

export default alt.createStore(ChatStore);
