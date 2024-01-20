import "swiper/css/bundle";
import "../scss/style.scss";

import burger from "./burger-menu.js";
import feedback from "./feedback.js";
import modal from "./modal-call.js";
import readmore from "./services.js";
import swiper from "./swiper.js";
import mainPicture from "../img/Picture_copy.jpg";


const mainPhoto = document.getElementById("mainPicture");
mainPhoto.src = mainPicture;

swiper(
  ".swiper-brands",
  ".swiper-pagination",
  ".brand-list__button_brands",
  ".brand-card-first",
  6,
  30
);

swiper(
  ".swiper-repair",
  ".swiper-pagination_repair",
  ".brand-list__button_repair",
  ".brand-card_repair",
  6,
  30
);

swiper(
  ".swiper_prices",
  ".swiper-pagination_prices",
  ".brand-list__button_prices",
  ".brand-card_prices",
  6,
  30
);

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
document
  .getElementById("readmorebtn")
  .addEventListener("click", readmore.toggle);
document.addEventListener("DOMContentLoaded", function () {
  console.log("Событие DOMContentLoaded сработало");
  burger.init();
  feedback.init();
  modal.init();
  // readmore.init();
});
