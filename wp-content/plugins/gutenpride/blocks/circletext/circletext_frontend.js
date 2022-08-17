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
        Array.from(document.querySelectorAll('.circletext-text svg')).map(myElement => {
            if (myElement) {
                if (
                    myElement.getBoundingClientRect().top < window.scrollY + window.innerHeight &&
                    window.scrollY < window.pageYOffset + myElement.getBoundingClientRect().top + myElement.clientHeight
                ) {
                    const scrolledDown =
                        // Math.floor(
                        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
                    // )
                    if (myElement.classList.contains('second_circle')) {
                        myElement.style.transform = `rotate(${scrolledDown * 3.6}deg) scale(0.7)`
                    } else {
                        myElement.style.transform = `rotate(${scrolledDown * 3.6}deg)`
                    }
                }
            }
        })
    }, 10);
})