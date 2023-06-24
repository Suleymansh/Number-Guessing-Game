const input = document.querySelector("#numberInput");
const button = document.querySelector(" #btn");
const result = document.querySelector("#result");
const resp = document.querySelector("#resp");

const randomNum = Math.floor(Math.random() * 15) + 1;

let guessCount = 0;

button.addEventListener("click", () => {
    guessCount++
  if (randomNum === Number(input.value)) {
    resp.textContent = `Your guess is right👍 Number is ${input.value}`;
     button.style.backgroundColor = "green";
    result.textContent = `Guessed numbers are: ${guessCount}`;
  } else if (input.value > 15) {
    result.textContent = `Please enter from 1 untill 15 numbers `;
     button.style.backgroundColor = "yellow";
  } else if (randomNum > input.value) {
    resp.textContent = `Your is too low 😧 `;
     button.style.backgroundColor = "red";
    result.textContent = "";
  } else if (randomNum < input.value) {
    resp.textContent = `Your is too high 😳`;
     button.style.backgroundColor = "red";
    result.textContent = "";
  }
  input.value="";
});
