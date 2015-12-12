import alt from '../alt';

class Actions {
  constructor () {
    this.generateActions(
      'sayHello',
      'sayBye'
    )
  }
}

export default alt.createActions(Actions);
