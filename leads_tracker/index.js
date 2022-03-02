let lead = ""
let myLeads = []
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const inputEl = document.getElementById("input-el")
let leadsEl = document.querySelector("ul")

window.onload = function(){
    inStorage = localStorage.getItem("myLeads")
    if (inStorage) {
        myLeads = inStorage.split(",")
        for (let leadInd=0; leadInd<myLeads.length; leadInd++) {
            generateLead(myLeads[leadInd])
        }
    }
}


inputBtn.addEventListener("click", function(){
    lead = inputEl.value
    if (lead.trim() !== "") {
        myLeads.push(lead)
        storeLead()
        generateLead(lead)
        inputEl.value = ""
    }
})

inputEl.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        inputBtn.click()
    }
})

clearBtn.addEventListener("click", function(){
    localStorage.clear()
    document.location.reload()
})

function generateLead(stored=none) {
    const newTag = document.createElement("li")
    const linkTag = document.createElement("a")
    if (stored.trim() !== ""){
        linkTag.href = "https:\\"+stored
        linkTag.innerText = stored
        linkTag.target = "_blank"
        newTag.appendChild(linkTag)
        newTag.innerHTML += `
        <i onclick="deleteLead(${myLeads.length})" id="lead-${myLeads.length}">Remove</i>
        `
        leadsEl.appendChild(newTag)
    }
}

function storeLead() {
    localStorage.removeItem("myLeads")
    localStorage.setItem("myLeads", myLeads)
}

function deleteLead(index) {
    //find the index
    let pushedButton = document.getElementById("lead-"+index)
    let parentLi = pushedButton.parentElement
    let targetText = parentLi.firstChild.textContent
    let targetIndex = myLeads.indexOf(targetText)
    myLeads.splice(targetIndex,1)
    parentLi.removeChild(parentLi.firstChild)
    parentLi.removeChild(pushedButton)
    storeLead()
}
