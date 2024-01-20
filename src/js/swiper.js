// function initializeSwiper(
//   selector,
//   paginationSelector,
//   buttonSelector,
//   cardsSelector,
//   visibleCountVar,
//   spaceBetweenVar
// ) {
//   let swiper = new Swiper(selector, {
//     slidesPerView: 'auto',
//     spaceBetween: spaceBetweenVar,
//     pagination: {
//       el: paginationSelector,
//       clickable: true
//     }
//   });

//   let cards = Array.from(document.querySelectorAll(cardsSelector));
//   let button = document.querySelector(buttonSelector);
//   let visibleCount = visibleCountVar;
//   let isCardsVisible = false;

//   button.addEventListener('click', () => {
//     isCardsVisible = !isCardsVisible;
//     changeVisibility();
//   });

//   function changeVisibility() {
//     if (window.innerWidth < 768) {
//       cards.forEach((card) => card.classList.add('hidden'));
//       button.classList.add('hidden');
//       return;
//     }

//     cards.forEach((card, index) => {
//       if (isCardsVisible || index < visibleCount) {
//         card.classList.remove('hidden');
//       } else {
//         card.classList.add('hidden');
//       }
//     });

//     if (isCardsVisible) {
//       button.classList.add('button-hide');
//       button.classList.remove('button-show');
//       button.textContent = 'Скрыть';
//     } else {
//       button.classList.add('button-show');
//       button.classList.remove('button-hide');
//       button.textContent = 'Показать ещё';
//     }

//     button.classList.toggle(
//       'hidden',
//       !isCardsVisible && cards.length <= visibleCount
//     );
//   }

//   function handleResize() {
//     let visible;

//     if (window.innerWidth >= 768 && window.innerWidth < 1120) {
//       visible = 6;
//     } else if (window.innerWidth >= 1120) {
//       visible = 8;
//     } else {
//       visible = 0;
//     }

//     visibleCount = visible;
//     changeVisibility();
//   }

//   window.addEventListener('resize', handleResize);

//   handleResize();
// }

// initializeSwiper(
//   '.swiper-brands',
//   '.swiper-pagination',
//   '.brand-list__button_brands',
//   '.brand-card-first',
//   6,
//   30
// );

// initializeSwiper(
//   '.swiper-repair',
//   '.swiper-pagination_repair',
//   '.brand-list__button_repair',
//   '.brand-card_repair',
//   6,
//   30
// );
// initializeSwiper(
//   '.swiper_prices',
//   '.swiper-pagination_prices',
//   '.brand-list__button_prices',
//   '.brand-card_prices',
//   6,
//   60
// );

// swiperModule.js

// import Swiper from 'swiper';
import Swiper from "swiper/bundle";

export default function initializeSwiper(
  selector,
  paginationSelector,
  buttonSelector,
  cardsSelector,
  visibleCountVar,
  spaceBetweenVar
) {
  let swiper = new Swiper(selector, {
    slidesPerView: "auto",
    spaceBetween: spaceBetweenVar,
    pagination: {
      el: paginationSelector,
      clickable: true,
    },
  });

  let cards = Array.from(document.querySelectorAll(cardsSelector));
  let button = document.querySelector(buttonSelector);
  let visibleCount = visibleCountVar;
  let isCardsVisible = false;

  button.addEventListener("click", () => {
    isCardsVisible = !isCardsVisible;
    changeVisibility();
  });

  function changeVisibility() {
    if (window.innerWidth < 768) {
      cards.forEach((card) => card.classList.add("hidden"));
      button.classList.add("hidden");
      return;
    }

    cards.forEach((card, index) => {
      if (isCardsVisible || index < visibleCount) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });

    if (isCardsVisible) {
      button.classList.add("button-hide");
      button.classList.remove("button-show");
      button.textContent = "Скрыть";
    } else {
      button.classList.add("button-show");
      button.classList.remove("button-hide");
      button.textContent = "Показать ещё";
    }

    button.classList.toggle(
      "hidden",
      !isCardsVisible && cards.length <= visibleCount
    );
  }

  function handleResize() {
    let visible;

    if (window.innerWidth >= 768 && window.innerWidth < 1120) {
      visible = 6;
    } else if (window.innerWidth >= 1120) {
      visible = 8;
    } else {
      visible = 0;
    }

    visibleCount = visible;
    changeVisibility();
  }

  window.addEventListener("resize", handleResize);

  handleResize();
}
