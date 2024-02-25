const passInput = document.querySelector('#inputPasswordId')
const lenInput = document.querySelector('#inputLengthId')
const infoLength = document.querySelector('label[for="inputLengthId"]')
const btnGen = document.querySelector('#btnGenerator')
const chkUpper = document.querySelector('#chkUpperId')
const chkLower = document.querySelector('#chkLowerId')
const chkNumber = document.querySelector('#chkNumberId')
const chkSymbols = document.querySelector('#chkSymbolsId')

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ['!', '@', '#', '$', '%', '&', '*', '?', '|']

const characters = Array.from(Array(26)).map((_, i) => i + 97)
const LowercaseCharacters = characters.map((item) => String.fromCharCode(item))
const UppercaseCharacters = LowercaseCharacters.map((item) => item.toUpperCase())

infoLength.innerHTML = lenInput.value

lenInput.addEventListener("change", () => {
    infoLength.innerHTML = lenInput.value
})

btnGen.addEventListener("click", () => {
    generatePassword(
        chkNumber.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        lenInput.value
    )
})

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowerCase,
    hasUpperCase,
    length
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowerCase ? LowercaseCharacters : []),
        ...(hasUpperCase ? UppercaseCharacters : []),
    ]

    if (newArray.length === 0) return;

    let password = ""

    for(let i=0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length)
        password += newArray[randomIndex]
    }

    passInput.value = password
}

function copyContent() {
    const inputPassword = document.getElementById("inputPasswordId");
    var tempInput = document.createElement("input");
    tempInput.value = inputPassword.value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}