# Project Name #
Yahtzee!

Classic dice rolling game of fun and relaxation for people of all ages

![yahtzee resized](https://user-images.githubusercontent.com/41316262/235382730-619c9eb1-5430-4e8b-bb3a-45abc55a9890.png)

## Summary ##
Play Yahtzee online for free!

## Problem ##
Bored?

## Solution ##
Play Yahtzee!

## Quote from You ##
You know this game! It's Yahtzee!

## How to Get Started ##
Enter your name. Click 'roll the dice' and start playing Yahtzee!

## Customer Quote ##
"I was so bored I thought I might die, but then I found...  Yahtzee!!" -hypothetical customer

## Closing and Call to Action ##
Click download and install.


---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 


### Installing

`npm install`
`npm test`
`npm build`
`npm start`

#### connect to local database service:

`$ sudo service mongod start`
`$ mongosh`
`$ db.use("yahtzee")`
`$ db.createCollection("users")`
`$ db.users.insertOne({username: <username>})`

#### start local server
`$ npm run dev`

Go to localhost:3000 in browser
choose your player
click "Roll 'em!" button
 - prints rolls to console
click on a die
 - prints dice # to console

## Roadmap
 - toggle a highlight of die when clicked
 - "hold" highlighted dice and have "roll 'em" button re-roll the unhighlighted dice
 - limit dice rolls to 3 per turn
 - add "done with turn" button that enables when a score is entered
 - keep developing!


## Built With
 - ReactJs
 - Nodejs
 - expressjs
 - mongodb
 - mongoose

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

