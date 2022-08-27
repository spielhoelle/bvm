/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./blocks/events/events_frontend.js ***!
  \******************************************/
function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

let throttlePause = false;

const throttle = (callback, time) => {
  if (throttlePause) return;
  throttlePause = true;
  setTimeout(() => {
    callback();
    throttlePause = false;
  }, time);
};

docReady(() => {
  const workbox = document.querySelector('.workbox');
  const circleLength = workbox.querySelector("#circle").getTotalLength();
  const tspans = Array.from(workbox.querySelectorAll('tspan'));
  const widthOfTspans = tspans.map(tspan => tspan.getComputedTextLength());
  const tspanOffsets = widthOfTspans.map((_, i) => widthOfTspans.slice(0, i + 1).reduce((acc, item) => acc + item, 0));
  tspanOffsets.unshift(0);
  tspanOffsets.pop();
  document.addEventListener('scroll', () => {
    throttle(() => {
      Array.from(document.querySelectorAll('.event-single-wrapper')).map((myElement, index) => {
        if (myElement) {
          if (myElement.getBoundingClientRect().top < window.scrollY + window.innerHeight && window.scrollY < window.pageYOffset + myElement.getBoundingClientRect().top + myElement.clientHeight) {
            // console.log('myElement.getBoundingClientRect().top', myElement.querySelector('.event-single-text h5').innerHTML, myElement.getBoundingClientRect().top);
            if (myElement.getBoundingClientRect().top <= 100) {
              Array.from(document.querySelectorAll('.events-text')).map(t => t.classList.add('hidden'));
              document.querySelectorAll('.events-text')[index].classList.remove('hidden');
              const rotateTo = (tspanOffsets[index] + widthOfTspans[index] / 2) / circleLength * 360;
              document.querySelector('.events .workbox svg').style.transform = `rotate(${rotateTo * -1 + 90}deg)`;
              tspans.map(tspan => {
                tspan.setAttribute('fill', "black");
              });
              tspans[index].setAttribute('fill', "#CB8E00");
            }
          }
        }
      });
    }, 10);
  });
});
/******/ })()
;
//# sourceMappingURL=events_frontend.js.map