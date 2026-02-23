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
let startDate;
let startTime;
let screenID;

const menuItems = [clearAlarm, armed, brakeAlarm];
const labelsItems = ["ВЗЯТЬ", "СНЯТЬ", "СБРОС ТРЕВОГ"];
let index = 0;
const updateUI = () => {
  screenUp.innerHTML = labelsItems[index];
  screenDown.innerHTML = "";
};

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
    case 1: // Экран Пожар
      if (val.length === 1 && !isNaN(val)) {
        inputBuffer += val;
        screenUp.innerHTML = "Пароль:";
        screenDown.innerHTML = "*".repeat(inputBuffer.length); // Имитация скрытия

        // Автозапуск при достижении 4 символов
        if (inputBuffer.length === 4) {
          if (inputBuffer === CORRECT_PIN) {
            inputBuffer = "";
            menu();
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
    case 2: // Меню
      console.log(val);
      if (val === "cancel") {
        inputBuffer = "";
        fire();
      } else if (val === "home") {
        inputBuffer = "";
        logs();
      } else if (val === "ok") {
        inputBuffer = "";
        brakeAlarm();
      }
      // Code to execute if expression === value2
      break;
    case 3: // Журнал
      // Code to execute if expression === value2
      if (val === "cancel") {
        fire();
      } else if (val === "home") {
        inputBuffer = "";
        logs();
      } else if (val === "ok") {
        inputBuffer = "";
        firelog();
      }
      break;
    case 4: // Событие
      // Code to execute if expression === value2
      if (val === "cancel") {
        logs();
      }
      break;
    case 5: // Code to execute if expression === value2
      break;
    case 6: // Code to execute if expression === value2
      console.log("Сброс");

      if (val === "cancel") {
        menu();
      } else if (val === "ok") {
        clearAlarm();
      }
      break;
    case 7: // Code to execute if expression === value2
      if (val === "cancel") {
        lock.classList.remove("hide");
        init();
      }

      break;
    case 8: // Code to execute if expression === value2
      break;
    case 9: // Code to execute if expression === value2
      break;
    case 10: // Перебор меню
      if (val === "cancel") {
        menu();
      } else if (val === "left") {
        index = (index - 1 + menuItems.length) % menuItems.length;
        updateUI();
      } else if (val === "right") {
        index = (index + 1) % menuItems.length;
        updateUI();
      } else if (val === "ok") {
        menuItems[index](); // Запуск функции по индексу
        screenDown.innerHTML = "";
      }
      break;
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
  screenID = 0;
}

traning.addEventListener("click", function () {
  clearInterval(timerId);
  traning.classList.add("hide");
  lFire.classList.add("fire");
  fire();
  const now = new Date();
  startDate = now.toLocaleDateString();
  startTime = now.toLocaleTimeString();
  console.log(startDate);
  console.log(startTime);
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

function firelog() {
  screenUp.innerHTML = "1 этаж, каб. 10";
  screenDown.innerHTML = "";
  lock.classList.remove("hide");
  screenID = 4;
  console.log(screenID);

  document.querySelector("#b1").addEventListener("mousedown", () => {
    screenUp.innerHTML = "адрес 1 датчик 5";
    screenDown.innerHTML = "";
  });
  document.querySelector("#b1").addEventListener("mouseup", () => {
    screenUp.innerHTML = "1 этаж, каб. 10";
    screenDown.innerHTML = "";
  });
  document.querySelector("#b2").addEventListener("mousedown", () => {
    screenUp.innerHTML = "1 этаж, каб. 10";
    screenDown.innerHTML = "адрес 1 датчик 5";
  });
  document.querySelector("#b2").addEventListener("mouseup", () => {
    screenUp.innerHTML = "1 этаж, каб. 10";
    screenDown.innerHTML = "";
  });
  document.querySelector("#b0").addEventListener("mousedown", () => {
    screenUp.innerHTML = `${startTime}`;
    screenDown.innerHTML = `${startDate}`;
  });
  document.querySelector("#b0").addEventListener("mouseup", () => {
    screenUp.innerHTML = "1 этаж, каб. 10";
    screenDown.innerHTML = "";
  });
}

function menu() {
  screenID = 10;
  lock.classList.add("hide");
  updateUI();
}

function setClearAlarm() {
  screenUp.innerHTML = "1 этаж, каб. 10";
  screenDown.innerHTML = "Пожар: 1";
  screenID = 5;
}

function brakeAlarm() {
  screenUp.innerHTML = "Сбросить тревоги?";
  screenDown.innerHTML = "";
  screenID = 6;
}

function clearAlarm() {
  screenUp.innerHTML = "Сброшено";
  screenDown.innerHTML = "";
  lFire.classList.remove("fire");
  screenID = 7;
}

function armed() {}
function disarmed() {}
