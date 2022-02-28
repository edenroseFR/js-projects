let screenCount = document.getElementById("screen-count")
let entries = document.getElementById("entry")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function countdown() {
    for (let i=5; i>-1; i--) {
        screenCount.innerText = i.toString()
        await sleep(i * 1000);
    }
};
