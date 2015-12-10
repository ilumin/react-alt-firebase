import React from 'react';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      messages: [
        'HI THERE HOW ARE YOU!',
        'I AM FINE!'
      ]
    };
  }

  render () {
    var messageNodes = this.state.messages.map( (message) => {
      return (
        <div>{message}</div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default App;
