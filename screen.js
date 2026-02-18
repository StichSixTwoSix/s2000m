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
let screenID = 0;

init();

btn.addEventListener("click", function () {
  clearInterval(timerId);
  traning.classList.add("hide");
  lFire.classList.add("fire");
  fire();
});

keyboard.addEventListener("click", (e) => {
  const btn = e.target.closest(".butt");
  if (!btn) return;

  const val = btn.dataset.val;

  switch (screenID) {
    case 1:
      // Экран Пожар
      if (val.length === 1 && !isNaN(val)) {
        inputBuffer += val;
        screenUp.innerHTML = "Пароль:";
        screenDown.innerHTML = "*".repeat(inputBuffer.length); // Имитация скрытия

        // Автозапуск при достижении 4 символов
        if (inputBuffer.length === 4) {
          if (inputBuffer === CORRECT_PIN) {
            inputBuffer = "";
            setings();
          } else {
            screenUp.innerHTML = "Неверный пароль";
            screenDown.innerHTML = "";
            inputBuffer = "";
            setTimeout(fire, 2000); // Сброс через 1.5 сек после ошибки
          }
        }
      } else if (val === "cancel") {
        inputBuffer = "";
        fire();
      } else if (val === "home") {
        inputBuffer = "";
        logs();
      }
      break;
    case 2:
      console.log(val);
      if (val === "cancel") {
        inputBuffer = "";
        fire();
      } else if (val === "home") {
        inputBuffer = "";
        logs();
      }
      // Code to execute if expression === value2
      break;
    case 3:
      // Code to execute if expression === value2
      console.log("3" + val);
      if (val === "cancel") {
        inputBuffer = "";
        fire();
      } else if (val === "home") {
        inputBuffer = "";
        logs();
      }
      break;
    case 4:
      // Code to execute if expression === value2
      break;
    case 5:
      // Code to execute if expression === value2
      break;
    case 6:
      // Code to execute if expression === value2
      break;
    case 7:
      // Code to execute if expression === value2
      break;
    case 8:
      // Code to execute if expression === value2
      break;
    case 9:
      // Code to execute if expression === value2
      break;
    case 10:
      // Code to execute if expression === value2
      break;
    // ... more cases
    default:
    // Code to execute if no case matches
  }

  // Если нажата цифра (длиной 1 символ)
});

function init() {
  const update = () => {
    screenUp.innerHTML = new Date().toLocaleTimeString();
  };
  update();
  timerId = setInterval(update, 1000);
  screenDown.innerHTML = "";
}

tranаing.addEventListener("click", function () {
  clearInterval(timerId);
  traning.classList.add("hide");
  lFire.classList.add("fire");
  fire();
});

function fire() {
  screenUp.innerHTML = "10-ПОЖАР";
  screenDown.innerHTML = "1 этаж, каб. 10";
  lock.classList.remove("hide");
  screenID = 1;

  console.log(screenID);
}

function logs() {
  screenUp.innerHTML = "ЖУРНАЛ СОБЫТИЙ";
  screenDown.innerHTML = "";
  lock.classList.remove("hide");
  screenID = 3;
  console.log(screenID);
}

function setings() {
  screenUp.innerHTML = "Настройки";
  screenDown.innerHTML = "";
  lock.classList.add("hide");
  screenID = 2;
  console.log(screenID);
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
