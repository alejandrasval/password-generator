const characters = [
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
  "Z",
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
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
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
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let btn = document.getElementById("btn");
let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");
let errorMessage = document.getElementById("error");

const getValue = () => {
  let inputValue = document.getElementById("length").value;
  document.getElementById("length").innerHTML = inputValue;
  if (inputValue >= 6 && inputValue < 16) {
    passwordOne.classList.add("active");
    passwordTwo.classList.add("active");
    passwordOne.classList.remove("inactive");
    passwordTwo.classList.remove("inactive");
    return inputValue;
  } else {
    errorMessage.innerHTML = "Invalid number. Min 6 and max 15 characters.⚠️";
    passwordOne.classList.add("inactive");
    passwordTwo.classList.add("inactive");
  }
};

function generateRandomNum(array) {
  const num = Math.floor(Math.random() * array.length);
  return num;
}

btn.addEventListener("click", function () {
  password1 = [];
  password2 = [];
  for (let index = 0; index < getValue(); index++) {
    password1.push(characters[generateRandomNum(characters)]);
    password2.push(characters[generateRandomNum(characters)]);
  }
  passwordOne.innerHTML = password1.join("");
  passwordTwo.innerHTML = password2.join("");
});
