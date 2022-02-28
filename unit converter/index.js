let userInp = document.getElementById("user-inp")
let lengthConversion = document.getElementById("length")
let volumeConversion = document.getElementById("volume")
let massConversion = document.getElementById("mass")

function convert() {
    let valueInput = userInp.value
    
    let length = getLength(valueInput)
    let volume = getVolume(valueInput)
    let mass = getMass(valueInput)

    lengthConversion.innerText = valueInput + " meters = " + length[0] + " | " + valueInput + " feet = " + length[1] + " meters"

    volumeConversion.innerText = valueInput + " liters = " + volume[0] + " | " + valueInput + " gallons = " + volume[1] + " litters"

    massConversion.innerText = valueInput + " kilos = " + mass[0] + " | " + valueInput + " pounds = " + mass[1] + " kilos"
}

function getLength(num){
    result = []
    result.push((num*3.28084).toFixed(3)) //meter to foot
    result.push((num*0.3048).toFixed(3))// foot to meter
    return result;
}

function getVolume(num){
    result = []
    result.push((num*0.264172).toFixed(3)) //litter to gallon
    result.push((num*3.78541).toFixed(3))// gallon to litter
    return result;
}

function getMass(num){
    result = []
    result.push((num*2.20462).toFixed(3)) // kilo to pound
    result.push((num*0.453592).toFixed(3))// pound to kilo
    return result;
}


// Function to run when the enter button is clicked
userInp.addEventListener("keydown", function(e){
    if (e.key == "Enter") {
        convert();
    }
});