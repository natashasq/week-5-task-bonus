const accordionElements = document.querySelectorAll("#question");
const accordionArray = Array.from(accordionElements);
const button = document.querySelector("#footer-btn");
const input = document.querySelector("#footer-input");

const emailEmptyMessage = "Whoops, please add your email";
const emailInvalidMessage = "Whoops, make sure it’s an email";
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const slide1 = document.querySelector("#slide-1");
const slide2 = document.querySelector("#slide-2");
const slide3 = document.querySelector("#slide-3");

const tabs = document.querySelectorAll("#tab");
const tabsArray = Array.from(tabs);

const iconClose = document.querySelector("#icon-close");
const iconHamburger = document.querySelector("#icon-hamburger");
const mobileNavigation = document.querySelector("#mobile-navigation");
const headerLogo = document.querySelector("#header-logo");

//email validation

button.addEventListener("click", e => {
  const message = document.querySelector(".footer__form-message");
  let errorMark = document.querySelector(".footer__form-input-mark");
  let messageText = document.querySelector(".footer__form-message-text");

  if (message.classList.contains("-error-message")) {
    message.classList.remove("-error-message");
    messageText.remove();
    errorMark.remove();
  }

  if (input.value === "") {
    e.preventDefault();

    const text = document.createTextNode(emailEmptyMessage);
    let messageText = document.createElement("p");
    messageText.appendChild(text);
    messageText.classList.add("footer__form-message-text");
    message.appendChild(messageText);
    message.classList.add("-error-message");

    errorMark = document.createElement("img");
    errorMark.src = "images/icon-error.svg";
    errorMark.classList.add("footer__form-input-mark");
    message.appendChild(errorMark);
    return;
  }

  if (!input.value.match(validRegex)) {
    e.preventDefault();

    const text = document.createTextNode(emailInvalidMessage);
    let messageText = document.createElement("p");
    messageText.appendChild(text);
    messageText.classList.add("footer__form-message-text");
    message.appendChild(messageText);
    message.classList.add("-error-message");

    errorMark = document.createElement("img");
    errorMark.src = "images/icon-error.svg";
    errorMark.classList.add("footer__form-input-mark");
    message.appendChild(errorMark);
    return;
  }
});

//accordion
accordionArray.forEach((accordionOuter, i) => {
  accordionOuter.addEventListener("click", function () {
    accordionArray.forEach((accordionInner, j) => {
      if (j != i) {
        accordionArray[j].nextElementSibling.style.maxHeight = null;
        const svg = accordionArray[j].firstElementChild;
        svg.classList.remove("-rotate-arrow");
        svg.firstElementChild.classList.remove("-red-arrow");
      }
    });

    const svg = this.firstElementChild;
    svg.classList.add("-rotate-arrow");
    svg.firstElementChild.classList.add("-red-arrow");

    const answer = this.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      svg.classList.remove("-rotate-arrow");
      svg.firstElementChild.classList.remove("-red-arrow");
      this.classList.remove("-active");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      svg.classList.add("-rotate-arrow");
      svg.firstElementChild.classList.add("-red-arrow");
    }
  });
});

//slide 

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    slide1.classList.add("-slide-none");
    slide2.classList.add("-slide-none");
    slide3.classList.add("-slide-none");

    const tabSlide = document.querySelector(`#slide-${i + 1}`);
    tabSlide.classList.remove('-slide-none');
  });
});

//navigation-bar

iconHamburger.addEventListener("click", () => {
  headerLogo.classList.add("-display-none");
  iconHamburger.classList.add("-display-none");
  mobileNavigation.classList.remove("-navigation-none");
  document.querySelector("html").style.overflow = "hidden";
});

iconClose.addEventListener("click", () => {
  headerLogo.classList.remove("-display-none");
  iconHamburger.classList.remove("-display-none");
  mobileNavigation.classList.add("-navigation-none");
  document.querySelector("html").style.overflow = "auto";
});
