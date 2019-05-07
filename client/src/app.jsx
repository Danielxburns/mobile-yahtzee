import React from 'react';
import Dice from './dice.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => {
        this.setState({
          players: data
        })
      })
      .catch(err => {
        console.log(`fetch error: ${err}`);
      })
    }

    render () {
      console.log(this.state);
    return (
      <div>Let's play some Yahtzee!
        <Dice />
      </div>

    );
  }
}

export default App;
