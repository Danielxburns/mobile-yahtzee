# Project Name #

<!-- 
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows. 

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->
 
## Heading ##
Yahtzee!
## Sub-Heading ##
Classic dice rolling game of fun and relaxation for people of all ages

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
Click download and install. Do it now!

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

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

## Deployment

Add additional notes about how to deploy this on a live system

## Built With
 - ReactJs
 - Nodejs
 - expressjs
 - mongodb
 - mongoose
 - heroku

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

