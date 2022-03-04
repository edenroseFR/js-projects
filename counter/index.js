let count = 0;
let counter = document.getElementById("count");
let entries = document.getElementById("entry")


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

function save(){
    entries.textContent += counter.innerText + " - "
    count = 0
    counter.innerText = "0"
}