// Enter you name in the quotes below if you would like to use your name.
let userName = 'Scotty';

// If the user put a name it will say hello to user otherwise just say hello.
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

// Enter a question you would like to ask the Magic Eight Ball in the quotes.
let userQuestion = 'Will I catch a fish today';

// reading back the question
userName ? console.log(`${userName}, you asked \"${userQuestion}?\"`) : console.log(`You asked \"${userQuestion}?\"`);

// setting a random number between 0 - 7
let randomNumber = Math.floor(Math.random() * 8);

let eaightBall = ''

switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'pffft ask again later'
}

console.log(eightBall)