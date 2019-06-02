import React from 'react';

const DiceImage = ({ roll, hold }) => {
  if (roll === 1) {
    return <img className="dice-image" src="faces/one.png" alt="1" onClick={hold} />;
  } else if (roll === 2) {
    return <img className="dice-image" src="faces/two.png" alt="2" onClick={hold} />;
  } else if (roll === 3) {
    return <img className="dice-image" src="faces/three.png" alt="3" onClick={hold} />;
  } else if (roll === 4) {
    return <img className="dice-image" src="faces/four.png" alt="4" onClick={hold} />;
  } else if (roll === 5) {
    return <img className="dice-image" src="faces/five.png" alt="5" onClick={hold} />;
  } else if (roll === 6) {
    return <img className="dice-image" src="faces/six.png" alt="6" onClick={hold} />;
  }
};

export default DiceImage;