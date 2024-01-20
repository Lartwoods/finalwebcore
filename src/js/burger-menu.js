// document.addEventListener('DOMContentLoaded', function () {
//   const showBurgerBtn = document.getElementById('burger-menu__showbtn');
//   const burgerMenu = document.getElementById('side-burger-menu');
//   const closeBurgerBtn = document.getElementById(
//     'side-burger-menu-button-close'
//   );
//   const modalFeedbackBtn = document.getElementById(
//     'burger-menu-footer-nav__chat'
//   );
//   const modalCallBtn = document.getElementById('burger-menu-footer-nav__call');

//   function openBurger() {
//     burgerMenu.classList.add('open-burger');
//   }
//   function closeBurger() {
//     burgerMenu.classList.remove('open-burger');
//   }
//   showBurgerBtn.addEventListener('click', openBurger);
//   closeBurgerBtn.addEventListener('click', closeBurger);

//   document
//     .querySelector('#side-burger-menu .side-burger-menu__wrapper')
//     .addEventListener('click', (event) => {
//       event._isClickBurger = true;
//     });
//   burgerMenu.addEventListener('click', (event) => {
//     if (event._isClickBurger) return;
//     event.currentTarget.classList.remove('open-burger');
//   });
// });

// burgerModule.js

const burger = {
  showBurgerBtn: document.getElementById('burger-menu__showbtn'),
  burgerMenu: document.getElementById('side-burger-menu'),
  closeBurgerBtn: document.getElementById('side-burger-menu-button-close'),
  modalFeedbackBtn: document.getElementById('burger-menu-footer-nav__chat'),
  modalCallBtn: document.getElementById('burger-menu-footer-nav__call'),

  openBurger: function () {
    this.burgerMenu.classList.add('open-burger');
  },

  closeBurger: function () {
    this.burgerMenu.classList.remove('open-burger');
  },

  init: function () {
    this.showBurgerBtn.addEventListener('click', () => this.openBurger());
    this.closeBurgerBtn.addEventListener('click', () => this.closeBurger());

    this.burgerMenu
      .querySelector('.side-burger-menu__wrapper')
      .addEventListener('click', (event) => {
        event._isClickBurger = true;
      });

    this.burgerMenu.addEventListener('click', (event) => {
      if (event._isClickBurger) return;
      event.currentTarget.classList.remove('open-burger');
    });
  },
};

export default burger;
