'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};
let stackOne;
let stackTwo;
const printStacks = () => {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

const movePiece = () => {
    // Your code here
    if (isLegal()) {
        let Piece = stackOne.pop();
        stackTwo.push(Piece);
        return checkForWin();
    }
    return false;
}

const isLegal = () => {
    // Your code here
    let startPiece;
    let endPiece;
    if (stackOne.length > 0) {
        startPiece = stackOne[stackOne.length - 1];

    }
    if (stackTwo.length > 0) {
        endPiece = stackTwo[stackTwo.length - 1];

    }
    if (startPiece == null) return false;
    if (endPiece == null) return true;
    if (endPiece < startPiece) return true;
    return false;
}
const checkForWin = () => {
    // Your code here
if (stacks["b"].length == 4){
    console.log("you Won");
    return true;
}
if (stacks["c"].length == 4){
    console.log("you Won");
    return true;
}
return false;
}

const towersOfHanoi = (startStack, endStack) => {
    // Your code here
stackOne = stacks[startStack];
stackTwo = stacks[endStack];
movePiece();

}

const getPrompt = () => {
    printStacks();
    rl.question('start stack: ', (startStack) => {
        rl.question('end stack: ', (endStack) => {
            towersOfHanoi(startStack, endStack);
            getPrompt();
        });
    });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

    // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
    describe('#towersOfHanoi()', () => {
      it('should detect a legal move', () => {
        //   towersOfHanoi("a","b")
        stackOne = stacks["a"];
        stackTwo = stacks["b"];
        assert.equal(isLegal(), true);
        
    
      });
      it('should detect illegal move', () => {
        //   towersOfHanoi("a","b")
        
        
        stackOne = stacks["b"];
        stackTwo = stacks["a"];
        assert.equal(isLegal(), false);
        
      });
     
      it('should detect a win', () => {
      stacks = {
            a: [],
            b: [],
            c: [4, 3, 2, 1]
        };
        assert.equal(checkForWin(), true);
        
      
        
      });
    });
  } else {
  
    // always returns ask the user for another input
    getPrompt();
  
  }
  
