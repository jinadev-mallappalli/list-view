export const smoothScroll = (element, from, to, timeValue, callback) => {
    // if (time == null) {
    //     time = 2000;
    // }
    let time = timeValue;
    let delta = 1000 / 30;
    let timeElapsed = 0;

    // let from = element.scrollLeft;
    // let to = element.scrollWidth;
    console.log(from, to)

    let interval = setInterval(() => {
        let progress = timeElapsed / time;
        let y = (progress * to) + ((1 - progress) * from);
        element.scrollTo(y, 0);

        timeElapsed += delta;

        if (timeElapsed >= time) {
            element.scrollTo(to, 0);
            window.clearInterval(interval);
            if (typeof callback === 'function') {
                callback();
            }
        }
    }, delta);
}