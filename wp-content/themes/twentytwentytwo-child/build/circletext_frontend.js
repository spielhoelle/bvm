/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./blocks/circletext/circletext_frontend.js ***!
  \**************************************************/
let throttlePause = false;

const throttle = (callback, time) => {
  if (throttlePause) return;
  throttlePause = true;
  setTimeout(() => {
    callback();
    throttlePause = false;
  }, time);
};

document.addEventListener('scroll', e => {
  throttle(() => {
    Array.from(document.querySelectorAll('.circletext-text svg')).map(myElement => {
      if (myElement) {
        if (myElement.getBoundingClientRect().top < window.scrollY + window.innerHeight && window.scrollY < window.pageYOffset + myElement.getBoundingClientRect().top + myElement.clientHeight) {
          const scrolledDown = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
          const direction = myElement.parentElement.dataset.direction === "right" ? -1 : 1;
          const {
            speed
          } = myElement.parentElement.dataset;
          const multiplier = Number(speed) / 100 + 1;

          if (myElement.classList.contains('second_circle')) {
            myElement.style.transform = `rotate(${scrolledDown * 3.6 * direction * multiplier}deg) scale(0.7)`;
          } else {
            myElement.style.transform = `rotate(${scrolledDown * 3.6 * direction * multiplier}deg)`;
          }
        }
      }
    });
  }, 10);
});
/******/ })()
;
//# sourceMappingURL=circletext_frontend.js.map