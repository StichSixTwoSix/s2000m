const screenUp = document.querySelector(".scr-up");
const screenDown = document.querySelector(".scr-down");
const keyboard = document.querySelector("#keyboard");
const lock = document.querySelector(".lock");
let inputBuffer = ""; // Хранилище для ввода
const CORRECT_PIN = "2222"; // Правильный пароль

// keyboard.addEventListener("click", (e) => {
//   // Проверяем, что кликнули именно по кнопке с нужным классом
//   const btn = e.target.closest(".butt");

//   if (btn) {
//     screenUp.innerHTML = "Нажата кнопка";
//     screenDown.innerHTML = btn.dataset.val;
//   }
// });

keyboard.addEventListener("click", (e) => {
  const btn = e.target.closest(".butt");
  if (!btn) return;

  const val = btn.dataset.val;

  // Если нажата цифра (длиной 1 символ)
  if (val.length === 1 && !isNaN(val)) {
    inputBuffer += val;
    screenUp.innerHTML = "Пароль:";
    screenDown.innerHTML = "*".repeat(inputBuffer.length); // Имитация скрытия

    // Автозапуск при достижении 4 символов
    if (inputBuffer.length === 4) {
      checkPin();
    }
  } else if (val === "cancel") {
    resetPin();
  } else if (val === "home") {
    screenUp.innerHTML = "_";
    screenDown.innerHTML = "ЖУРНАЛ УВЕДОМЛЕНИЙ";
    lock.classList.remove("unlock");
  }
});

function checkPin() {
  if (inputBuffer === CORRECT_PIN) {
    screenUp.innerHTML = "Status:";
    screenDown.innerHTML = "Вход в меню";
    lock.classList.add("unlock");
    onSuccess();
  } else {
    screenUp.innerHTML = "Status:";
    screenDown.innerHTML = "Неверный пароль";
    onError();
    setTimeout(resetPin, 1500); // Сброс через 1.5 сек после ошибки
  }
}

function resetPin() {
  inputBuffer = "";
  screenUp.innerHTML = "Ready";
  screenDown.innerHTML = "_";
}

// Функции-заглушки для будущих процессов
function onSuccess() {
  console.log("Дверь открыта / Система разблокирована");
}
function onError() {
  console.log("Тревога / Лог ошибки");
}
