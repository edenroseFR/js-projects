function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function countdown() {
    let screenCount = document.getElementById("screen-count")
    for (let i=5; i>-1; i--) {
        screenCount.innerText = i.toString()
        await sleep(i * 1000);
    }
};