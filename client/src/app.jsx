import React from 'react';
import Popup from 'reactjs-popup'
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
    return (
      <div>
        <h1>Let's play Yahtzee!</h1>
        <Dice players={this.state.players} />
      </div>

    );
  }
}

export default App;
