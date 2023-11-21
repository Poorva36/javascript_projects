'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

//from bankist -2 data-----------------------------------------------------------
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

// --------------------------------------------------------------------------------------
// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };
//movement ke har element pr jakaer function run krega
/* account1.movements.forEach(function(num){
console.log(num);
})

for(let arr of account1.movements){
  console.log(arr);
} */

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const accounts = [account1, account2];

//  Elements

const labelWelcome = document.querySelector('.welcome');

const labelDate = document.querySelector('.date');

const labelBalance = document.querySelector('.balance__value');

const labelSumIn = document.querySelector('.summary__value--in');

const labelSumOut = document.querySelector('.summary__value--out');

const labelSumInterest = document.querySelector('.summary__value--interest');

// ------------------------------------------------------------------------------------
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');

const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');

const btnTransfer = document.querySelector('.form__btn--transfer');

const btnLoan = document.querySelector('.form__btn--loan');

const btnClose = document.querySelector('.form__btn--close');

// --------------------------------------------------------------------------
const btnSort = document.querySelector('.btn--sort');
// --------------------------------------------------------------------------

const inputLoginUsername = document.querySelector('.login__input--user');

const inputLoginPin = document.querySelector('.login__input--pin');
// ----------------------------------------------------------------------------------
const inputTransferTo = document.querySelector('.form__input--to');

const inputTransferAmount = document.querySelector('.form__input--amount');

const inputLoanAmount = document.querySelector('.form__input--loan-amount');

const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/*<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend --> */

const displayMovements = function (acc, sort = false) {
  //forEach(function (current value, index, array)){   }

  containerMovements.innerHTML = '';

  console.log(acc.movements);

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[index]);

    const day = `${date.getDate()}`.padStart(2, 0);
    const month = date.getMonth() + 1;

    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const displayDate = `${day}/${month}/${year}`;

    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    }. ${type}</div>

    <div class='movements__date'> ${displayDate} </div>
        <div class="movements__value"> ${mov.toFixed(2)}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML('beforeEnd', html);
  });
};

// sort button working---------------------------------------------

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccountLogin, !sorted);

  sorted = !sorted;
  console.log(sorted);
});

// displayMovements(account1.movements)

//print total sum of transactions from acc1 movements, and display in ui

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((sum, mov) => sum + mov, 0);
  /* other way just to understand above line
  let balance = acc.movements.reduce( (sum , mov) => sum+mov,0)*/

  labelBalance.innerHTML = `${acc.balance.toFixed(2)} EUR`; //doubt?????????????????
};
calcDisplayBalance(account1);
console.log(account1);

// const calcPrintBalance = function(movements){
//   const balance = movements.reduce( (sum , mov) => sum+mov,0)
// }
// calcPrintBalance()

// ----- print total withdraw amount from movement from account1-----------------

// const euroINR = 80
// const calcWithdrawSummary = function(movements){
//   const incomes = movements.filter( mov => mov<0)
//   .map( mov => mov*euroINR)
//   .reduce( (sum , mov) => sum+mov )

// }
// calcWithdrawSummary(account1.movements)

// print together income(deposit) and outcome(withdraw) and proint in ui by innerhtml---------

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);

  labelSumIn.innerHTML = `${incomes.toFixed(2)} €`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov, 0);

  labelSumOut.innerHTML = `${outcome.toFixed(2)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    // .filter((mov, i, arr) =>{
    //   console.log(arr);
    //  return mov >= 1 })

    .reduce((sum, mov) => sum + mov, 0);

  labelSumInterest.innerHTML = `${interest.toFixed(2)} €`;
};
// calcDisplaySummary(account1.movements)

//-------------------implementing login button-----------------------------------------------

/* preventdefault-- html form has a defualt behaviour when we click sumbit
   it reloads the page, so to prevent from reloading. */

//------------------creating user name---------------------------------------------------

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    //acc.username - yeh hum key craete krrhe hai object ke bhar--- explicit
    //acc.owner- se nikalega values jo jayegi username main.

    acc.username = acc.owner //doubt ?- acc kaise accoun1,2,3,4 bnra hai?
      .toLowerCase()
      .split(' ')
      .map(firstname => firstname[0])
      .join('');
  });
};
createUserName(accounts);

console.log(accounts);

//--------------------updating UI------------------------------------
const upadteUi = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

//-------------------------implementing login detail(username)----------------------------

let currentAccountLogin;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccountLogin = accounts.find(
    user => user.username === inputLoginUsername.value
  );

  //we have found the account by using find() hence, no need to find it again for pin.

  if (currentAccountLogin.pin === null) {
    alert('User or password incorrect');
  } 

  else if (currentAccountLogin?.pin === Number(inputLoginPin.value)) {
    //if this condition satisfy- display UI and  welcome msg
    labelWelcome.innerHTML = `Welcome Back, 
    ${currentAccountLogin.owner.split(' ')[0]}`;

    //display the app class - whole page--------------------
    containerApp.style.opacity = 100;

    // create current date and time--------------------------------

    // const now = new Date();

    // // date/month/year

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = now.getMonth() + 1;

    // const year = now.getFullYear();
    // const hour = now.getHours();
    // const minute = now.getMinutes();
    // labelDate.innerHTML = `${day}/${month}/${year}, ${hour}: ${minute}`;

    // -----------------------API- application programming interface-----------------------
    const now = new Date();
    // labelDate.textContent

    // internationalisation api use---------------------------------
    // datetimeformat function--------------------------------

    // en-US is a local datetime format of US.

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // weekDay: 'long',
    };

    // property to get language of the dekstop - navigator.language
    // const locale = navigator.language;
    // console.log(locale);

    

    labelDate.innerHTML = new Intl.DateTimeFormat(currentAccountLogin.locale, options).format(now);
    // labelDate.innerHTML = new Intl.DateTimeFormat('ar-SY').format(now)

    //clear input fields-----------------------------------
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    // inputLoginPin.blur()

    //display movements
    displayMovements(currentAccountLogin);

    //display balance
    calcDisplayBalance(currentAccountLogin);

    //display summary
    calcDisplaySummary(currentAccountLogin);
  }

  console.log(currentAccountLogin);
});

//fake always loggedin------------------------------------------------------------------

currentAccountLogin = account1;
upadteUi(currentAccountLogin);
containerApp.style.opacity = 100;

// -------------------------------------------------------------------------------------

//transfer money section---------------------------------------------------------------------

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transferTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  //clear the input---------------------------
  inputTransferAmount.value = '';
  inputTransferTo = ' ';

  //push()= amount which has been trasfer to new recipent
  if (
    amount > 0 &&
    currentAccountLogin.balance >= amount &&
    transferTo.username !== currentAccountLogin.username
  ) {
    //doing the transfer-----------------------
    currentAccountLogin.movements.push(-amount);
    transferTo.movements.push(amount);

    // add transfer date------------------------------------------------------------
    currentAccountLogin.movementsDates.push(new Date().toISOString);
    transferTo.movementsDates.push(new Date().toISOString);

    upadteUi(currentAccountLogin);
  } else {
    console.log('transfer fail');
  }

  // accounts.movements.push(amount);

  // console.log(trasferTo, amount);
});

//----------------------close account-------------------------------------------------------

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccountLogin.username &&
    Number(inputClosePin?.value) === currentAccountLogin.pin
  ) {
    console.log('account has been succefully closed');

    const index = accounts.findIndex(
      acc => acc.username === currentAccountLogin.username
    );
    console.log(index);

    //deleting all data from ui--------------------
    accounts.splice(index, 1);

    //vanish all the elements from the ui after closing account
    containerApp.style.opacity = 0;

    //change the main heading from welcome back to log in
    labelWelcome.innerHTML = 'Log in to get started';
  } else {
    console.log('invalid details found');
  }

  inputCloseUsername.value = '';
  inputClosePin.value = '';
  // else{
  //   console.log('invalid details found');
  // }
});

//loan amount--------------------------------------------------------------------

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccountLogin.movements.some(mov => mov >= 0.1 * loanAmount)
  ) {
    // add movement-------------
    currentAccountLogin.movements.push(loanAmount);

    // add loan date----------------------------------------------------------
    currentAccountLogin.movementsDates.push(new Date().toISOString());

    upadteUi(currentAccountLogin);
  } else {
    console.log('loan amount is not eligible');
  }
  inputLoanAmount.value = '';
});

//----------------------practice -----------------------------------------


// make a filter on movements and print the number which are greater than 0
// const deposit = account1.movements.filter( (mov) => {
//   return mov > 0
// })
// console.log(deposit)

// //by 'for of' on movements and print the number which are greater than 0
// /*const depositsFor = []
// for (let mov of account1.movements){
//   if(mov > 0 ){
//     depositsFor.push(mov)
//   }
// } */

// //make a filter on movements and print the number which are lesser than 0
// const withdrawal = account1.movements.filter( mov => mov < 0)
// console.log(withdrawal);

//---------------------------------------------------------------------------------------

// //by reduce  add all elements of movements-----

// /*here it is not needed to write sum = 0 because by default the passes parameters
//  value is 0 in  reduce */
// // let sum = 0

// //total , current value , current index , array { initial value }
// const balance = account1.movements.reduce( ( sum, mov , i) => {

//   console.log(`Iteration ${i}: ${sum} `);
//     return mov + sum
// },0)

// //above question by for of
// // let balance1 = 0
// // for (let mov of account1.movements){
// //     balance1 = balance1 + mov
// //     console.log(balance1);
// // }

// /* entries - whenever we use index in for of loop, we use entries as loop not take index.
// and alos use [] <- for parameter inside for of */
// let balance1 = 0
// for (let [ i , mov] of account1.movements.entries()){
//    balance1 = balance1 + mov
//    console.log(` Iteration ${i}: ${balance1}`)
// }

// const max = movements.reduce( (acc , mov) => {

//   if(acc > mov)
//     return acc
//   else
//     return mov

// }, movements[0] )
// console.log(max);

// // movements: [200, 450, -400, 3000, -650, -130, 70, 1300]

// // iteration 0 : 0
// // iteration 1 : 200
// // iteration 2 : 650
// // iteration 3 : 250

// // const inr = 80
// // const convertInr = movements.filter( (mov ) => {
// //    return mov>0
// // })
// // console.log(convertInr);

// // const conversion = convertInr.map( (mov) => {
// //     return mov*inr
// //     // console.log(`${mov}`* `${inr}`);
// // })
// // console.log(conversion);

// // const addConversion = conversion.reduce( (sum , mov) => {
// //    return sum+mov
// // })
// // console.log(addConversion);

// //---total all deposite from movement array and convet it into inr*80
// const eurToInr = 80
// const totalDepositInr = movements.filter( mov => mov>0 )
// .map( mov => mov*eurToInr)
// .reduce( (sum ,mov) => sum+mov ,0)
// console.log(totalDepositInr);


/*============== find , filter , reduce , map , findIndex  ===================*/

// //================find method=================================================

/* find work on the condition given to him, and return the element, depend upon, 
whether it is from object or array but find works on array always. */

// const finding = movements.find( mov => mov>0)
// console.log(finding);

// const account = accounts.find( acc => acc.owner==='Steven Thomas Williams')
// console.log(account);

// /* there are three important array methods that we will use all the time to perform data
//  transformation.
// these use to create new arays based on transforming data from another array. */

// ---------------------------------------------------------------------------------------

//--------------------------map()----------------------------------------------------------

// /* 1) Map() : Used to loop over arrays  , similar to for each. but the differenc is: it creates
// the brand new array. it takes an array loop over in each interation, applies a simple operation
// that we specify to the cureent array element.
// It return a new array , containing the result of , applying an operation, on all
// original elements.

// eg:
// const array = [2,3,4,5,6,67]
// array.map(function(){
//   return num*10

// })

//---------------------------------------filter()---------------------------------------

// 2) filter():
// It is use to filter for elements in the original array, which satisfy
// its certain condition.
// filter() returns a new array, containing the array elements, that passes a
// specify test condition.

// eg:
// let people = [ {age: 23 }, {age: 27 }, {age: 28 } ]

// people.filter( (person) =>
//  {
//   return person.age <= 3
// })

// people.filter(person => person.age <= 3)

//---------------------------------------------reduce()----------------------------------

// 3) reduce:
// As the name define it reduce the elements of an array into single value

// Use to boil down all the elements, of the original array into one single value.
// eg: adding of all elemnets together.

// const money = [23,45,67,89]
// const total = money.reduce(( sum , mov) => sum+amount )   // short hand of arrow

// //sum ke andar value return hoty hai hmesha
// const total = money.reduce(( sum , mov) =>
// {
//   return sum+mov )
// } // normally.

// // another eg:

// const money = [23,45,67,89]
// const sum = money.reduce(function( sum, amount)
// { return sum+amount } )
// */

//-------------------------------------find index method-----------------------------

/*it is also a array method like find(). it uses to find the index of element but, 
only when we gave the condition, when condition satisfies, it gave the nearest and
first value index, and return single value, its is not affect our original array.  */

let col = [2, 7, 90, 100, 70, 80];

const findOut = col.findIndex(clr => clr > 70);
console.log(findOut);


// // function ke andar function ko call kiyaan(hof):------
// /* let sum = 0
// function add(a,b){
//   sum = a+b
//   sums(sum)

// }
// function sums(a){
//   console.log(a);
// }
// add(2,3) */

// // ***********************************converting EURO to USD------------

// // const eurTousd = 1.1
// // const movementUsd = account1.movements.map( function(mov){
// //     return (mov * eurTousd)
// // })
// // console.log(movementUsd);

// //by arrow function---------------
// const eurTousd = 1.1
// const movementUsd = account1.movements.map( mov => mov * eurTousd)
// console.log(movementUsd)

// // do above thing same with for of loop----------
// // const arr7 = []
// // for (let mov of account1.movements){
// //     arr7.push(mov * eurTousd)
// //   }
// //   console.log(arr7);

// // to know the description that movement is withdraw or deposite--------------
// const movementsDescription = account1.movements.map( (value , index ) =>
//   // if(value > 0 ){
//   //   return  `movement ${index+1}: you deposited ${value}`
//   // }
//   // else{
//   //   return `movement ${index+1}: you withdraw ${value}`
//   // }
//   `Movement ${index+1}: you ${value > 0 ? 'deposited' : 'withdrawal'} ${value}`
// )
// console.log(movementsDescription);

//-------------------computing name--------------------------------------------------

// const user = 'Simba'
// //split takes an array and stores the splitted data.
// const userName = user
// .toLowerCase()
// .split(' ')
// .map(firstname => firstname[0])
// .join('')
// console.log(userName);

// some and every-------------------------------------------------------------------------

// console.log(movements.includes(-130));

// console.log(movements);

// console.log(movements.some( mov => mov===-130));

// //some return a boolean value , and single value according to condition passes.
// const anyDeposit = movements.some( mov => mov>5000)
// console.log(anyDeposit)

// /* every() */------------------------------------------------------------------------
console.log(movements.every(mov => mov > 0));
console.log(account2.movements.every(mov => mov > 0));

/*  separate callback: --------------------------------------------------------------- */
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); //true
console.log(movements.every(deposit)); //false
console.log(movements.filter(deposit)); //store in deposit

// flat and flatmap() ------------------------------------------------------------
//flat() - remove nested array and flatened the array normally.

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, [6]]], 7, 8];
console.log(arrDeep.flat(1));

const peo =  [[[1, 2], 3], [4, [5, [6]]], 7, 8];
peo.flat(2)
console.log(peo); //?????????????????????????????????????????????????????????????????/

// const accountMovement = accounts.map( mov => mov.movements)
// console.log(accountMovement);

// const allMovements = accountMovement.flat()
// console.log(allMovements);

// // just eg:
// const overAllBalance = allMovements.reduce(( sum,mov) => sum+mov , 0)
// console.log(overAllBalance);

// given below- chaining map, flat, reduce--------------------------------------------------
const overAllBalance = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((sum, mov) => mov + sum, 0);
console.log(overAllBalance);

// flatMap() - phele map krta hai fir result ko flat krdeta hai
const overAllBalance1 = accounts
  .flatMap(mov => mov.movements)
  .reduce((sum, mov) => mov + sum, 0);
console.log(overAllBalance);

// sorting of arrays--------------------------------------------------------------------------
// sorting sort in alphabetical manner

const owners = ['pooh', 'deku', 'tanya', 'viku'];
console.log(owners.sort());

// sorting of numbers
// sorting sort in numurical manner- like 123456789

console.log(movements);
console.log(movements.sort());

// return <0 , a,b (keep order)
//return >0 , a,b (switch order)

/*------------------------------
a-b ----------ascending
b-a ------------decending
---------------------------- */

//desending order by sort----------------------
// movements.sort( (a,b) => {

//   if(a<b)
//     return 1

//   if (a>b)
//     return -1

// } )
// console.log(movements);

//asending order by sort-----------------------
// movements.sort( (a,b) => {

//   if(a>b)
//     return 1

//   if (a<b)
//     return -1

// } )

//short hand-------------------
movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

//----------------------------------------------------------------------------------------

const arr0 = [1, 2, 3, 4, 5, 6, 7];
const a = new Array(1, 2, 3, 4, 5, 6, 7);

const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5));

x.fill(1, 3, 5);
console.log(x);

console.log(arr0.fill(23, 4, 6));

//  Array.from---------------------creating and filling the array

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (current, index) => {
  console.log(current, index + 1);
});
console.log(z);

/* which array method to use?

  To mutate orginal array:
  1) add to orginal:
  a) push() - end main push krta hai
  b) unshift - start m push hota hai
  
  2) remove from original
  a) pop() - end se niklata hai
  b) shift() - start se nikalta hai
  c) splice() - kahi se v nikalta hai
  
  3) others: 
  a) reverse()
  b) sort()
  c) fill()

  a new array-------------------------------
  1) computed from original
  a) map() 
  
  2) filtered using condition:
  a) filter()

  3) portion of original:
  a) slice()

  4) adding original to other
  a) concate()

  5) flatening the original
  a) flat()
  b) flatMap()

  an array index---------------------------------------

  1) based on value
  a) indexof

  2) based onm text condition
  a) findindex

  an array element----------------------------------------
  a) based on text condition
  1) find()

  know if array includes:

  1) based on values
  a) include()

  2) based on test condition
  a) some and every()

  a new string-------------------------------------

  1) based on separator string
  a) join()

   to tranform to value-------------------------------
   1) based on accumulator
   a) reduce()
  
  to just loop array------------------------------
  1) based on callback
  a) forEach()

  */

// converting and checking number-------------------------------------------
/* numbers are represented internally in 64 base 2 format, that means numbers 
are stored in binary format, so basically they always contain 0s and 1s 

123 = 100*1+10*2+3 - base10

111 = 2*2*1+2*1+1 - base2   

1101 = 2^3*1 + 2^2*1 + 2^1*0 + 2^0*1 = 13

101 = 2^2*1 + 2^1*0  + 2^0*1 = 5    */

// base10  - 0 to 9. 1/10=0.1, 3/10 = 3.333

//base2(binary base2)-  0 and 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// conversion--------------------------------
console.log(Number('23'));

console.log(+'23');

// for eg:
// console.log(23===23.0);

// parsing-----------------------
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));

//check if the value is nan(not a number)
console.log(Number.isNaN(20 / 0));
console.log(Number.isNaN(0 / 20));

//checking if a value is finite or not
console.log(Number.isFinite(0 / 20));
console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(0));

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.max(2, 3, 4, 5, 6, 7, 8, '9'));
// max px nhi leta
console.log(Math.max(2, 3, 4, 5, 6, 7, 8, '9px'));

console.log(Math.min(2, 5, 7, 8, 9, 0));
console.log(Math.PI);

console.log(Math.random() * 6);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1);
//0...1 -> 0...(max-min) -> (min...max)
console.log(randomInt(10, 20));

// ceil , floor, tofixed

// floor - lowest posiible value
console.log(Math.floor(3.3));
console.log(Math.floor(3.9));

// ceil - highest posiible value
console.log(Math.ceil(3.3));
console.log(Math.ceil(3.9));

// ----------Numeric separator-------------------------------------

const diameter = 287_460_000_000; // 28746000000
// const diameter1 = 287_460_000__000
console.log(diameter);
// console.log(diameter1); - error no two underscore allowed
console.log(Number('237_123_456')); //number is not adaptable

console.log(parseInt('237_123_456')); //parseint take intital before underscore and discarded others

// ------------------------BigInt-------------------------------------------------------
console.log(2 ** 53 - 1);

console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5); //not acceptable, will show same output

console.log(
  689327863498678563367989721234567891234567896568967454236769808787543544679n
);
console.log(
  BigInt(
    689327863498678563367989721234567891234567896568967454236769808787543544679
  )
);

/* we can also create bigint by using bigint function, so sometime thats neccesary
 without the  'n', so this gives us kind of same result, not really for some reason
 coz js will first have to  represent this number internally, before it
can trnsform to bigint, thats the reason why from certain point the 2nd number
 is different */

// --------------creating dates--------------------------------
// date is constructor funtion which create a new instance of a date

// const now = new Date()
// console.log(now);

console.log(new Date('Oct 15 1996 18:05:55'));
console.log(new Date('November 3 1996 18:05:55'));

console.log(new Date(account1.movementsDates[0]));

// year- month-date-time
console.log(new Date(2043, 10, 19, 15, 23));
//10 is novemeber because date start with 0 so 0-january----11-december

console.log(new Date(2043, 10, 33));
console.log(new Date(0)); //begining of unix time

console.log(new Date(3 * 24 * 60 * 60 * 1000));

//  working with dates--------------------------------------------------------------------

const future = new Date(2050, 10, 19, 15, 23);
console.log(future);

console.log(future.getFullYear());

console.log(future.getMonth());

console.log(future.getDate());

console.log(future.getDay());

console.log(future.getMinutes());

console.log(future.getSeconds());

console.log(future.getMilliseconds());

console.log(future.toISOString());

console.log(future.getTime());
console.log(new Date(2552464380000));

future.setFullYear(2040); //sets year of a date
console.log(future);

// BigInt, dates, time interval. time out, counter,
// selecting creating and delting element, styles attribute and clases, implementing scrolling
// types of event and event handler(event propogation, event delegation),
// dom traversing , tapped component,  sticky navigation, interscetion of observer API
// slider component

/*Event propagation, Event delegation: Navigation
Lazy loading
Lifecycle of DOM events

AJAX,  API calls, Callback, Promise, Fetch Api, Asyn/Await  */


