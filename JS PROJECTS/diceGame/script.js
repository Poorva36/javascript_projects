'use strict';

// selecting elements and put it into variable
const player1Element = document.querySelector('.player--1');
const player2Element = document.querySelector('.player--2');

// define array
let scores = [0, 0];
// index 0 indicates player 1 and index-1 indicates player2

const score1 = document.querySelector('#score--1');
const score2 = document.getElementById('score--2');
const current1 = document.querySelector('#current--1');
const current2 = document.querySelector('#current--2');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new')

let currentScore = 0;
let activePlayer = 1;

let playing = true


score1.innerHTML = 0;
score2.innerHTML = 0;

const switchPlayer = function () {
  current1.innerHTML = '0';
  current2.innerHTML = '0';
  currentScore = 0;    // actual sum 
  // switch to next player
  // activePlayer = activePlayer===1 ? 2:1

  if (activePlayer === 1) {
    activePlayer = 2;
  } else {
    activePlayer = 1;
  }

  // toggle means - work same as add and remove function but, if class is added it remove it and if removed , added
  // here- changing background color
  player1Element.classList.toggle('player--active'); 
  player2Element.classList.toggle('player--active');
};



// adding css class in html through js, so that we can remove or add it,whenevr we need it,which is not possible in html
diceElement.classList.add('hidden');

// when dice button roll, dice image occur.
// rolling dice functanality
btnRoll.addEventListener('click', function () {

  if(playing){

    // 1) generating a random dice roll
  
    //------------- math.random always generate number from zero
    // ------------used trunc for not include decimals number
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
  
    // 2) display dice
    // remove the hidden class by displaying 
    diceElement.classList.remove('hidden');
  
    diceElement.src = `dice-${diceRandom}.png`;
  
    // 3) check for rolled 1 : if true - switch to next player and make current - 0
    // if 1 is not coming -
  
    if (diceRandom !== 1) {
      currentScore = currentScore + diceRandom;
      document.getElementById(`current--${activePlayer}`).innerHTML = currentScore;  // ?
      // current1.innerHTML = currentScore
    } 
    else {
      switchPlayer();
    }

  }
  // else{
    
  // }

});

// working on hold button

btnHold.addEventListener('click', function () {

  if(playing === true){

    // BY ARRAY
    // 1) add cureent score to active player score
  
    scores[activePlayer - 1] = scores[activePlayer - 1] + currentScore;
    document.getElementById(`score--${activePlayer}`).innerHTML = scores[activePlayer - 1];
    // console.log(scores[activePlayer-1])
  
    // 2) check if  player score- <=100, then he wins and finish the game
    if (scores[activePlayer - 1] >= 20) {
      playing = false 
      diceElement.classList.add('hidden')
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } 
    else {
      // 3) after clicking hold button game will switch to 2nd player from active
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', function(){
  score1.innerHTML = '0'
  score2.innerHTML = '0'
  current1.innerHTML = '0'
  current2.innerHTML = '0'
  currentScore = 0
  scores = [0,0]
  diceElement.classList.add('hidden')
})


