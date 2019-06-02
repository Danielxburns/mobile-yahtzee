const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../db/index.js');

const app = express();
let port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/../client/dist')))

app.get('/users', (req, res) => {
  console.log('inside get');
  db.getAllUsers((err, result) => {
    console.log(`GET result=${result}`);
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
})

app.post('/users', (req, res) => {
  console.log(`${req.method} ${req.url} ${JSON.stringify(req.query)}`);
  let username = req.body.username;
  console.log(`POST request=${JSON.stringify(req.body.username)}`);
  db.postNewUser(username, (err, result) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  })
});

app.listen(port, () => {
  console.log(`listening to port ${port}!`);
});
