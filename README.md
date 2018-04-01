# iwannabethehacker
The hardest, most realistic programming challenge since sliced bread.

## Inspiration

A multitude of surveys resulted in the objective conclusion that the modern bourgeois employer demands absolute pliability from their human resources. The perseverance of elementary natures are conditional to bring about the production of labour in stringent operational blocks. This critical convergence can be most adequately demonstrated in the intelligentsia desired by those who misunderstand the retroactive values of human compassion and greed.

But, mainly by [The Eric Andre Show](https://www.youtube.com/watch?v=jn-KkqQOres).

## What it does

This programming test challenges your ability to rapidly learn a language to solve a very simple small problem. Professor Google can support your efforts.

## How we built it

We used a [Node.js](https://nodejs.org/en/) server that handles testing the submitted code and evaluating the results (using the [JDoodle](https://www.jdoodle.com/) code execution API). The client is implemented using html, css, and javascript.

## Challenges we ran into

We initially tried very hard to implement a server-less architecture; however, there were messages about [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) when API calls were made from the client and no amount of expert help could solve this issue. We pivoted and separated the CORS-causing API calls to the server where they did not offend.

In trying to get a code editor on the challenge page, we had a lot of trouble with [CodeMirror](https://codemirror.net/) and line numbering. In the end a clever CSS trick was used.

## Accomplishments that we're proud of

We are very proud to have produced a work that challenges people to rise above their current knowledge. We are also very proud to have deployed to an AWS instance without much of a challenge and to have created an A E S T H E T I C webzone design.

## What we learned

* Spend the time to consider the architecture up front and you'll save time in the long run.
* CSS can make a diamond from the rough html.
* Always go to slideshow karaoke if that is an option.
* Deploy to a server and secure webzone addresses early.

## What's next for I wanna be the !HACKER!

There are many further steps to decrease the challenge of the coding (e.g. providing minimalistic templates) and increase the challenge of the typing (e.g. more distractions, disable the backspace/delete buttons). Leaderboards would foster the competitive spirit of people who like to brag about how much COBOL they know. Also, increase the level of non-sequitur.
