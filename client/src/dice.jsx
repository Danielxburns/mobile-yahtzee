import React from 'react';

const DiceImage = ({ roll }) => {
  if (roll === 1) {
    return <img className="dice-image" src="faces/one.png" alt="1" />;
  } else if (roll === 2) {
    return <img className="dice-image" src="faces/two.png" alt="2" />;
  } else if (roll === 3) {
    return <img className="dice-image" src="faces/three.png" alt="3" />;
  } else if (roll === 4) {
    return <img className="dice-image" src="faces/four.png" alt="4" />;
  } else if (roll === 5) {
    return <img className="dice-image" src="faces/five.png" alt="5" />;
  } else if (roll === 6) {
    return <img className="dice-image" src="faces/six.png" alt="6" />;
  }
};

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolls: []
    };
    this.throwDice = this.throwDice.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  throwDice() {
    let rolls = [];
    for (let i = 0; i < 5; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    this.setState({
      rolls: rolls
    });
  }

  handleChange(e) {
    this.setState ({
      player: e.target.value,
      highScore: e.target.highScore
    })
  }

  render() {
    console.log(`inside render props= ${JSON.stringify(this.props.players)}`);
    return (
      <div className="dice-container" >
        <h3>Player</h3>
        <select value={this.state.player} onChange={this.handleChange}>
          <option key="0" > choose</option>
          {this.props.players.map((player) => (
            // console.log('inside map player=' + JSON.stringify(player.username))
            <option key={player._id} > {player.username} &nbsp; High Score: {player.highScore}</option>
          ))};
        </select>
        <div>
        {this.state.rolls.map((roll, index) => (
          <DiceImage roll={roll} key={index} />
        ))}
        </div>
        <button className="button" onClick={this.throwDice} >Roll 'em!</button>
      </div>
    )
  }
}

export default Dice;
