// const modalCallDialog = document.getElementById('callDialog');
// const modalCallOpenBtn = document.getElementById('modal-call__open-button');
// const modalCallCloseBtn = document.getElementById('modal-call__close-button');
// const modalCallFooterBtn = document.getElementById(
//   'burger-menu-footer-nav__call'
// );
// const modalCallWrapper = document.querySelector(
//   '#callDialog .modal-call__wrapper'
// );

// modalCallOpenBtn.addEventListener('click', () =>
//   modalCallDialog.classList.add('open')
// );
// modalCallFooterBtn.addEventListener('click', () => {
//   modalCallDialog.classList.add('open');
//   modalCallDialog.style.zIndex = '9999';
// });
// modalCallCloseBtn.addEventListener('click', () =>
//   modalCallDialog.classList.remove('open')
// );

// modalCallWrapper.addEventListener('click', (event) => {
//   event._isClickModalCall = true;
// });

// modalCallDialog.addEventListener('click', (event) => {
//   if (event._isClickModalCall) return;
//   modalCallDialog.classList.remove('open');
// });
// modalModule.js

const modal = {
  modalCallDialog: document.getElementById("callDialog"),
  modalCallOpenBtn: document.getElementById("modal-call__open-button"),
  modalCallCloseBtn: document.getElementById("modal-call__close-button"),
  modalCallFooterBtn: document.getElementById("burger-menu-footer-nav__call"),
  modalCallWrapper: document.querySelector("#callDialog .modal-call__wrapper"),

  init: function () {
    this.modalCallOpenBtn.addEventListener("click", () =>
      this.modalCallDialog.classList.add("open")
    );

    this.modalCallFooterBtn.addEventListener("click", () => {
      this.modalCallDialog.classList.add("open");
      this.modalCallDialog.style.zIndex = "9999";
    });

    this.modalCallCloseBtn.addEventListener("click", () =>
      this.modalCallDialog.classList.remove("open")
    );

    this.modalCallWrapper.addEventListener("click", (event) => {
      event._isClickModalCall = true;
    });

    this.modalCallDialog.addEventListener("click", (event) => {
      if (event._isClickModalCall) return;
      this.modalCallDialog.classList.remove("open");
    });
  },
};

export default modal;
