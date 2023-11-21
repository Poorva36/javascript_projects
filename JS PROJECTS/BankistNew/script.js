'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( btn => btn.addEventListener('click', openModal))
btnCloseModal.forEach( btn => btn.addEventListener('click', closeModal))





// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// BigInt, dates,
//  time interval. time out, counter,
// selecting creating and delting element, 
// styles attribute and clases, implementing scrolling
// types of event and event handler(event propogation, event delegation),
// dom traversing , tapped component,  sticky navigation, interscetion of observer API
// slider component

/*Event propagation, Event delegation: Navigation
Lazy loading
Lifecycle of DOM events

AJAX,  API calls, Callback, Promise, Fetch Api, Asyn/Await  */
