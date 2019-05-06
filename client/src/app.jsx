import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/users')
  //     .then(res => res.json())
  //     .catch()
  // }

  render () {
    return (
      <div>Let's play some Yahtzee!</div>
    );
  }
}

export default App;
