const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yahtzee', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => {
  console.log('connected to Yahtzee!');
});

// SET UP MODELS //

const userSchema = mongoose.Schema({
  "username": String,
  "highSore": Number,
});

let User = mongoose.model('User', userSchema);

// SET UP METHODS //

let getAllUsers = (callback) => {
  console.log('inside getAllUsers');
  User.find({}, ((err, result) => {
    if (err) {
      callback(err);
    } else {
      console.log(`find result=${result}`);
      callback(null, result);
    }
  }))
};

let postNewUser = (username, callback) => {
  let newUser = new User({
    "username": username,
    "highscore": 0
  })
  console.log(`inside postNewUser ${newUser}`);
  newUser.save((err, result) => {
    if(err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
}

module.exports = { getAllUsers, postNewUser };
