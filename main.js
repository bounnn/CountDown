(() => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE *60;
    const DAY = HOUR * 24;

    function setElem(id,text) {
        const element = document.getElementById(id);
        element.innerHTML = text;
    }

    function countDown() {
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2021 23:59:59').getTime();
        const gap = newYear - now;
        
        // const day = document.getElementById('day')
        // day.innerHTML = Math.floor(gap )
        setElem('day', Math.floor(gap/DAY));
        setElem('hour', Math.floor(gap % DAY / HOUR));
        setElem('minute', Math.floor(gap % HOUR / MINUTE));
        setElem('second', Math.floor(gap % MINUTE / SECOND));
    }
    function run() {
        countDown();
        setInterval(countDown,1000);
    }
    run();
})();