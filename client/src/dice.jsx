import React from 'react';
import DiceImage from './diceImage.jsx'

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolls: [],
      hold: [false, false, false, false, false],
    };
    this.throwDice = this.throwDice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hold = this.hold.bind(this);
  }

  throwDice() {
    let rolls = [];
    for (let i = 0; i < 5; i++) {
      if (this.state.hold[i] !== false) {
        rolls.push(this.state.rolls[i])
      } else {
        rolls.push(Math.floor(Math.random() * 6) + 1);
      }
    }
    this.setState({
      rolls: rolls
    }, console.log(`this.state.rolls=${this.state.rolls}`));
  }

  handleChange(e) {
    this.setState ({
      player: e.target.value,
      highScore: e.target.highScore
    })
  }

  hold (die) {
    console.log(`You clicked on die# ${die + 1}!`)
    this.setState ((state) => {
      const hold = state.hold.map((item, i) => {
        if (i === die) {
          // can i toggle the border property here
          // maybe get element where key = index

          return item = !item;
        } else {
          return item;
        }
      });
      return {
        hold,
      };
    });
  }
// loop thru state.hold
  // if hold[i] is true
      // toggle border

  render() {
    // console.log(`inside render props= ${JSON.stringify(this.props.players)}`);
    return (
      <div className="dice-container" >
        <h3>Player</h3>
        <select value={this.state.player} onChange={this.handleChange}>
          <option key="0" > choose</option>
          {this.props.players.map((player) => (
            <option key={player._id} > {player.username} &nbsp; High Score: {player.highscore}</option>
          ))};
        </select>
        <div>
        {this.state.rolls.map((roll, index) => (
          <DiceImage roll={roll} key={index} /* border={this.state.hold[index]} */ hold={() => this.hold(index)} />
        ))}
        </div>
        <button className="button" onClick={this.throwDice} >Roll 'em!</button>
      </div>
    )
  }
}

export default Dice;
