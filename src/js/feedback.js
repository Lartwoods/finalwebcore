const feedback = {
  feedbackDialog: document.getElementById("feedbackDialog"),
  feedbackOpenBtn: document.getElementById("feedback__open-button"),
  feedbackCloseBtn: document.getElementById("feedback__close-button"),
  feedbackFooterChatBtn: document.getElementById(
    "burger-menu-footer-nav__chat"
  ),
  feedbackWrapper: document.querySelector("#feedbackDialog .feedback__wrapper"),

  init: function () {
    this.feedbackOpenBtn.addEventListener("click", () =>
      this.feedbackDialog.classList.add("open")
    );

    this.feedbackFooterChatBtn.addEventListener("click", () => {
      this.feedbackDialog.classList.add("open");
      this.feedbackDialog.style.zIndex = "9999";
    });

    this.feedbackCloseBtn.addEventListener("click", () =>
      this.feedbackDialog.classList.remove("open")
    );

    this.feedbackWrapper.addEventListener("click", (event) => {
      event._isClickFeedback = true;
    });

    this.feedbackDialog.addEventListener("click", (event) => {
      if (event._isClickFeedback) return;
      this.feedbackDialog.classList.remove("open");
    });
  },
};

export default feedback;
