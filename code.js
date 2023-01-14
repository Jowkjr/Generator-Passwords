const inputLenght = document.querySelector("#length");
const number = document.querySelector("#number");
const power = document.querySelector("#power");
let password = document.querySelector("#password");
const refresh = document.querySelector("#refresh");
const copy = document.querySelector("#copy");

const div = document.querySelector(".password-container-span");

const lettersUp = document.querySelector("#lettersUp");
const lettersDown = document.querySelector("#lettersDown");
const numbersPick = document.querySelector("#numbers");
const signsPick = document.querySelector("#signs");

const tooltipCopy = document.querySelector("#tooltipCopy");

const lettersS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const letterX = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const sings = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "?",
  "/",
  "<",
  ">",
  ",",
  ".",
  ";",
  ":",
  "'",
  '"',
  "[",
  "{",
  "]",
  "}",
  "|",
  "+",
  "=",
  "-",
  "_"
];

const allLetters = lettersS.concat(letterX);

// x2
// X
const xSings = letterX.concat(sings);
const xNumbers = letterX.concat(numbers);
// Small
const sSings = lettersS.concat(sings);
const sNumbers = lettersS.concat(numbers);

// numbers
const numbersSing = numbers.concat(sings);

// another x3

const xSingsNumbers = xSings.concat(numbers);
const xSingsS = xSings.concat(lettersS);

const sSingsNumbers = sSings.concat(numbers);
const lettersNumbers = allLetters.concat(numbers);

const all = lettersNumbers.concat(sings);

inputLenght.oninput = () => {
  let value = inputLenght.value;
  number.textContent = value;
  if (value <= 6) {
    power.textContent = "Weak";
    power.style.color = "red";
  } else if (value <= 11) {
    power.textContent = "Medium";
    power.style.color = "yellow";
  } else {
    power.textContent = "Strong";
    power.style.color = "green";
  }

  generator();
};

function generator() {
  let result = "";
  let value = parseInt(inputLenght.value);

  if (
    (lettersUp.checked &&
      lettersDown.checked &&
      numbersPick.checked &&
      signsPick.checked) === true
  ) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += all[Math.floor(Math.random() * all.length)];
    }
    password.textContent = result;
    return result;
  } else if (
    lettersUp.checked &&
    lettersDown.checked &&
    numbersPick.checked === true
  ) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result +=
        lettersNumbers[Math.floor(Math.random() * lettersNumbers.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersUp.checked && numbersPick.checked && signsPick.checked) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += xSingsNumbers[Math.floor(Math.random() * xSingsNumbers.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersUp.checked && lettersDown.checked && signsPick.checked) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += xSingsS[Math.floor(Math.random() * xSingsS.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersDown.checked && numbersPick.checked && signsPick.checked) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += sSingsNumbers[Math.floor(Math.random() * sSingsNumbers.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersUp.checked && lettersDown.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += allLetters[Math.floor(Math.random() * allLetters.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersUp.checked && numbersPick.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += xNumbers[Math.floor(Math.random() * xNumbers.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersUp.checked && signsPick.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += xSings[Math.floor(Math.random() * xSings.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersDown.checked && numbersPick.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += sNumbers[Math.floor(Math.random() * sNumbers.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersDown.checked && signsPick.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += sSings[Math.floor(Math.random() * sSings.length)];
    }
    password.textContent = result;
    return result;
  } else if (numbersPick.checked && signsPick.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += numbersSing[Math.floor(Math.random() * numbersSing.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersUp.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += letterX[Math.floor(Math.random() * letterX.length)];
    }
    password.textContent = result;
    return result;
  } else if (lettersDown.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += lettersS[Math.floor(Math.random() * lettersS.length)];
    }
    password.textContent = result;
    return result;
  } else if (numbersPick.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += numbers[Math.floor(Math.random() * numbers.length)];
    }
    password.textContent = result;
    return result;
  } else if (signsPick.checked === true) {
    number.textContent = value;
    for (let i = 0; i < value; i++) {
      result += sings[Math.floor(Math.random() * sings.length)];
    }
    password.textContent = result;
    return result;
  }

  return;
}

function tooltip() {
  setTimeout(function () {
    tooltipCopy.style.display = "none";
  }, 3000);
}

refresh.addEventListener("click", generator);
copy.addEventListener("click", async (e) => {
  const content = document.querySelector("#password").textContent;
  await navigator.clipboard.writeText(content);
  const copied = await navigator.clipboard.readText();
  tooltipCopy.style.display = "block";
  tooltip();
});
