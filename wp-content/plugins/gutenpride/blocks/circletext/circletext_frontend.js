let throttlePause = false
const throttle = (callback, time) => {
    if (throttlePause) return;

    throttlePause = true;
    setTimeout(() => {
        callback();
        throttlePause = false;
    }, time);
};

document.addEventListener('scroll', (e) => {
    throttle(() => {
        const myElement = document.querySelector('.circletext-text svg')
        if (myElement) {
            if (
                myElement.getBoundingClientRect().top < window.scrollY &&
                window.scrollY < window.pageYOffset + myElement.getBoundingClientRect().top + myElement.clientHeight
            ) {
                const scrolledDown =
                    // Math.floor(
                    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
                // )
                myElement.style.transform = `rotate(${scrolledDown * 3.6}deg)`
            }
        }
    }, 10);
})