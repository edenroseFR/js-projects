let pass1 = document.getElementById("password-1")
let pass2 = document.getElementById("password-2")
let pass3 = document.getElementById("password-3")
let pass4 = document.getElementById("password-4")

function generatePasswords() {
    let allChars = possibleCharacters()
    let passLength = Math.floor(parseInt(document.getElementById("length").value))
    let passwordArr = []
    for (let i=0; i<4; i++) {
        let newPassword = ""
        for (let char=0; char<passLength; char ++) {
            let charIndex = Math.floor(Math.random() * allChars.length)
            newPassword += allChars[charIndex]
        }
        passwordArr.push(newPassword)
        newPassword = ""
    }
    displayPasswords(passwordArr)
    enableFields()
}

function possibleCharacters() {
    let chars = []
    for (let i=32; i<127; i++) {
        chars.push(String.fromCharCode(i));
    }
    return chars
}

function displayPasswords(passwords) {
    pass1.value = passwords[0]
    pass2.value = passwords[1]
    pass3.value = passwords[2]
    pass4.value = passwords[3]
}

function enableFields() {
    pass1.disabled = false
    pass2.disabled = false
    pass3.disabled = false
    pass4.disabled = false
}

async function copyText(num) {
    let message = document.getElementById("alert")
    let password = document.getElementById("password-"+num)
    password.select();
    document.execCommand('copy');
    message.hidden = false
    await sleep(1 * 2000)
    message.hidden = true
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};