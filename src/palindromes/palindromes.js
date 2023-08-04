const Stack = require('../lib/stack');

const isPalindrome = sentence => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const middle = Math.floor(sentence.length / 2);
  const stack = new Stack();

  //push all the letters up to middle into a new stack
  for (let index = 0; index < middle; index++) {
    stack.push(sentence[index]);
  }
  //check if middle is odd
  middle += sentence.length % 2 === 0 ? 0 : 1;

  //compare two stacks, if letters are ever not equal return false
  for (let index = middle, limit = sentence.length; index < limit; index++) {
    if (sentence[index] !== stack.pop) {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;
