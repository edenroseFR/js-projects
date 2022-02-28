let count = 0;
let counter = document.getElementById("count");
function increment() {
    count += 1
    let newVal = count.toString()
    counter.innerText = newVal
};
function decrement() {
    count -= 1
    let newVal = count.toString()
    counter.innerText = newVal
};