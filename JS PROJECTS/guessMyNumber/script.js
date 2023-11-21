'use strict';

// document.querySelector('.message').innerHTML = 'Correct number...' 


// document.querySelector('.number').innerHTML = '6' 


// document.querySelector(".score").innerHTML = '15' 


// document.querySelector(".guess").value = '12'
// console.log(document.querySelector(".guess").value)

// click event
// Math.random -m always number in decimal - for that we use- math.trunc

// const secretNumber = Math.trunc(Math.random()*20)+1
// console.log(secretNumber)


// document.querySelector(".check").addEventListener('click', function (){
//     let guess = parseInt(document.querySelector('.guess').value)
//     if(!guess || guess<1){
//         document.querySelector('.message').innerHTML = 'NO NUMBER FOUND'
//     }
//     else if(secretNumber === guess) {
//         document.querySelector('.number').innerHTML = guess                
//         document.querySelector('.message').innerHTML = 'Correct number...' 
//         document.querySelector('.mynumber').innerHTML = 'You Won'
        
//     }
//     else if(secretNumber>guess){
//         document.querySelector('.message').innerHTML = 'TOO LOW'
//     }
//     else if(secretNumber<guess ){
//         document.querySelector('.message').innerHTML = 'TOO HIGH'
//     }
   
    // console.log(typeof guess)
    // console.log(document.querySelector(".guess").value)





let secretNumber = Math.trunc(Math.random()*20)+1
console.log(secretNumber)

var score = 20

let highscore = 0


document.querySelector('.check').addEventListener('click' , function(){
    let userInput = parseInt(document.querySelector('.guess').value)
    
    if (!userInput || userInput<1) {
        // score = score-1, decrement(--)
        --score
        document.querySelector('.score').innerHTML = score
        document.querySelector('.message').innerHTML = "NO NUMBER"
    }
    else if(userInput===secretNumber){
    document.querySelector('.number').innerHTML = userInput
    document.querySelector('.message').innerHTML = "correct number"
    document.querySelector('.mynumber').innerHTML = "YOU WON"
    document.body.style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem' 

    if(score>0){
        highscore = score
        document.querySelector('.highscore').innerHTML = highscore
        
    }
    }  
    else if(userInput<secretNumber){
         
        if(score>1){
            --score
            document.querySelector('.score').innerHTML = score
            document.querySelector('.message').innerHTML = 'too low'
        }
        else {
            document.querySelector('.score').innerHTML = 0
            document.querySelector('.message').innerHTML = 'you lost the game' 
        }
    }
    else if(userInput>secretNumber){

        if(score>1){
        --score
        document.querySelector('.score').innerHTML = score
        document.querySelector('.message').innerHTML = 'too high'
        }
        else {
            document.querySelector('.message').innerHTML = 'you lost the game'
            document.querySelector('.score').innerHTML = 0
        }
    }
   

})

    document.querySelector('.again').addEventListener('click' , function(){
        score = 20
        document.querySelector('.score').innerHTML = score
        highscore = 0
        document.querySelector('.highscore').innerHTML = highscore
        secretNumber = Math.trunc(Math.random()*20)+1
        console.log(secretNumber)
        document.querySelector('.message').innerHTML = "start guessing..."
        document.querySelector('.number').innerHTML = '?'
        document.querySelector('.guess').value = ''
        document.body.style.backgroundColor = '#d57b7b'
        document.querySelector('.number').style.width = '15 rem'

    })










