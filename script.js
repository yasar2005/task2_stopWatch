let container = document.querySelector(".content");

function stopwatchfun() {
    container.innerHTML = `
        <div class="stopwatch-box">
            <div class="screen">
                <span id="hr">00</span>:<span id="min">00</span>:<span id="sec">00</span>:<span id="msec">00</span>
            </div>
            <div class="btns">
                <button class="start">Start</button>
                <button class="stop">Stop</button>
                <button class="reset">Reset</button>
            </div>
        </div>
    `;

    let hr = 0, min = 0, sec = 0, msec = 0, intervalId;
    let on = false;

    const hrElement = document.getElementById("hr");
    const minElement = document.getElementById("min");
    const secElement = document.getElementById("sec");
    const msecElement = document.getElementById("msec");

    function updateDisplay() {
        hrElement.textContent = hr < 10 ? "0" + hr : hr;
        minElement.textContent = min < 10 ? "0" + min : min;
        secElement.textContent = sec < 10 ? "0" + sec : sec;
        msecElement.textContent = msec < 10 ? "0" + msec : msec;
    }

    function startWatch() {
        if (on) {
            intervalId = setTimeout(() => {
                msec++;
                if (msec >= 100) {
                    sec++;
                    msec = 0;
                }
                if (sec >= 60) {
                    min++;
                    sec = 0;
                }
                if (min >= 60) {
                    hr++;
                    min = 0;
                }
                updateDisplay();
                startWatch();
            }, 10);
        }
    }

    document.querySelector(".start").addEventListener("click", () => {
        on = true;
        startWatch();
    });

    document.querySelector(".stop").addEventListener("click", () => {
        on = false;
        clearTimeout(intervalId);
    });

    document.querySelector(".reset").addEventListener("click", () => {
        on = false;
        clearTimeout(intervalId);
        hr = min = sec = msec = 0;
        updateDisplay();
    });
}
