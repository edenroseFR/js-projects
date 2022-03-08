const carService = document.querySelector(".car")
const lawnService = document.querySelector(".lawn")
const weedsService = document.querySelector(".weeds")
const orders = document.querySelector(".orders")
const totalAmount = document.querySelector(".total")
const sendBtn = document.querySelector(".send-invoice")
let allOrders = getOrdersInStorage()
let payable = 0
const prices = {
    "Wash Car": 10,
    "Mow Lawn": 20,
    "Pull Weeds": 30
}

window.onload = function(){
    let orderKeys = Object.keys(allOrders)
    for (let i=0; i<orderKeys.length; i++) {
        let key = orderKeys[i]
        let taskName = allOrders[key]
        displayOrder(key, taskName)
    }
    totalAmount.textContent = "$" + payable

}

function displayOrder(key, taskName){
    let newTask = `
    <div class="order-${key} order">
        <h6 class="name">${taskName}</h6>
        <h6 class="price">$${prices[taskName]}</h6>
    </div>
    `
    orders.innerHTML += newTask
    payable += prices[taskName]
    totalAmount.textContent = "$" + payable
}

carService.addEventListener("click", function(){
    let itemID = updateOrders("Wash Car")
    let newTask = `
    <div class="order-${itemID} order">
        <h6 class="name">Wash Car</h6>
        <h6 class="price">$${prices['Wash Car']}</h6>
    </div>
    `
    orders.innerHTML += newTask
    payable += prices['Wash Car']
    totalAmount.textContent = "$" + payable
})

lawnService.addEventListener("click", function(){
    let itemID = updateOrders("Mow Lawn")
    let newTask = `
    <div class="order-${itemID} order">
        <h6 class="name">Mow Lawn</h6>
        <h6 class="price">$${prices['Mow Lawn']}</h6>
    </div>
    `
    orders.innerHTML += newTask
    payable += prices['Mow Lawn']
    totalAmount.textContent = "$" + payable
})

weedsService.addEventListener("click", function(){
    let itemID = updateOrders("Pull Weeds")
    let newTask = `
    <div class="order-${itemID} order">
        <h6 class="name">Pull Weeds</h6>
        <h6 class="price">$${prices['Pull Weeds']}</h6>
    </div>
    `
    orders.innerHTML += newTask
    payable += prices['Pull Weeds']
    totalAmount.textContent = "$" + payable
})

sendBtn.addEventListener("click", function(){
    localStorage.removeItem("my_orders")
    payable = 0
    window.location.reload()
    alert("Invoice sent!")
})

function updateOrders(taskName){
    // Generate ID
    let  keys = Object.keys(allOrders)
    let itemID = 0
    if (keys.length > 0){
        itemID = parseInt(keys[keys.length - 1]) + 1
    }

    // update orders
    allOrders[itemID] = taskName
    localStorage.removeItem("my_orders")
    localStorage.setItem("my_orders", JSON.stringify(allOrders))
}

function getOrdersInStorage(){
    let storedOrders = localStorage.getItem("my_orders")
    // if localStorage is not set
    if (!storedOrders){
        // set it, and then return an empty object
        window.localStorage.setItem("my_orders", "{}")
        return {}
    } else{
        return JSON.parse(storedOrders)
    }

}