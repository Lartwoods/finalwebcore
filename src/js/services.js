// let i = 0;
// function readmore() {
//   let btn = document.getElementById('readmorebtn');
//   if (!i) {
//     document.getElementById('moretext').style.display = 'block';
//     document.getElementById('dots').style.display = 'none';
//     btn.innerHTML = 'Скрыть';
//     btn.classList.add('button-hide');
//     btn.classList.remove('button-show');
//     i = 1;
//   } else {
//     document.getElementById('moretext').style.display = 'none';
//     document.getElementById('dots').style.display = 'block';
//     btn.innerHTML = 'Читать далее';
//     btn.classList.remove('button-hide');
//     btn.classList.add('button-show');
//     i = 0;
//   }
// }

// servicesModule.js

// let i = 0;

// function readmore() {
//   let btn = document.getElementById("readmorebtn");
//   if (!i) {
//     document.getElementById("moretext").style.display = "block";
//     document.getElementById("dots").style.display = "none";
//     btn.innerHTML = "Скрыть";
//     btn.classList.add("button-hide");
//     btn.classList.remove("button-show");
//     i = 1;
//   } else {
//     document.getElementById("moretext").style.display = "none";
//     document.getElementById("dots").style.display = "block";
//     btn.innerHTML = "Читать далее";
//     btn.classList.remove("button-hide");
//     btn.classList.add("button-show");
//     i = 0;
//   }
// }
// document.getElementById("readmorebtn").addEventListener("click", readmore);
let i = 0;

const readmore = {
  toggle: function () {
    let btn = document.getElementById("readmorebtn");
    if (!i) {
      document.getElementById("moretext").style.display = "block";
      document.getElementById("dots").style.display = "none";
      btn.innerHTML = "Скрыть";
      btn.classList.add("button-hide");
      btn.classList.remove("button-show");
      i = 1;
    } else {
      document.getElementById("moretext").style.display = "none";
      document.getElementById("dots").style.display = "block";
      btn.innerHTML = "Читать далее";
      btn.classList.remove("button-hide");
      btn.classList.add("button-show");
      i = 0;
    }
  },
};

export default readmore;

// const services = {
//   readmore: readmore,
// };

// export default services;
