const screenUp = document.querySelector(".scr-up");
const screenDown = document.querySelector(".scr-down");
const keyboard = document.querySelector("#keyboard");
const screen = document.querySelector(".screen");
const lock = document.querySelector(".lock");
const traning = document.querySelector(".traning");
const btn = document.querySelector(".btn");
const lFire = document.querySelector(".lFire");
let inputBuffer = ""; // Хранилище для ввода
const CORRECT_PIN = "2222"; // Правильный пароль
let timerId; // Создаем переменную для хранения ID таймера

init();

btn.addEventListener("click", function () {
  traning.classList.add("hide");
  lFire.classList.add("fire");
  fire();
});

function init() {
  const update = () => {
    screenUp.innerHTML = new Date().toLocaleTimeString();
  };
  update();
  timerId = setInterval(update, 1000);
  screenDown.innerHTML = "";
}

traning.addEventListener("click", function () {
  clearInterval(timerId);
  traning.classList.add("hide");
  lFire.classList.add("fire");
  fire();
});

function fire() {
  screenUp.innerHTML = "10-ПОЖАР";
  screenDown.innerHTML = "1 этаж, каб. 10";
}
function logs() {
  screenUp.innerHTML = "ЖУРНАЛ СОБЫТИЙ";
  screenDown.innerHTML = "";
}
function brakeAlarm() {
  screenUp.innerHTML = "10:31:25";
  screenDown.innerHTML = "";
}
function clearAlarm() {
  screenUp.innerHTML = "10:31:25";
  screenDown.innerHTML = "";
}
function setClearAlarm() {
  screenUp.innerHTML = "10:31:25";
  screenDown.innerHTML = "";
}
function blank() {
  screenUp.innerHTML = "10:31:25";
  screenDown.innerHTML = "";
}
