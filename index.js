window.onload = function() {
  const startPlay = document.querySelector("button");

  let flag = false;
  let timeBox = document.querySelector(".time");

  startPlay.addEventListener("click", init);

  function init() {
    const cells = document.querySelectorAll(".cell");
    const borderArr = document.querySelectorAll(".border");

    let counter = 0;
    let dataSet1, dataSet2;
    let checkData1, checkData2;
    let getTime = 0;
    let intervalID;

    flag = true;

    getRandom = (min, max) => {
      let num = Math.random() * (max - min) + min;
      num = num.toFixed(0) * 1;
      return num;
    };

    getColors = () => {
      for (let i = 0; i < cells.length; i++) {
        let randomNumber = getRandom(1, 30);
        borderArr[i].style.order = randomNumber;
      }
    };

    clearData = () => {
      dataSet1 = "";
      dataSet2 = "";
    };

    intervalID = setInterval(() => {
      getTime = getTime + 0.1;
      timeBox.textContent = getTime.toFixed(1);
    }, 100);

    finishgame = () => {
      clearInterval(intervalID);
      console.log("Ура, вы сделали это!");
    };

    getColors();
    startGame();
    intervalID;

    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", function() {
        if (!flag) {
          return;
        }

        if (!dataSet1) {
          dataSet1 = event.target;
          checkData1 = dataSet1.getAttribute("data-name");

          dataSet1.classList.add("show");
          return;
        }

        if (dataSet1) {
          dataSet2 = event.target;

          checkData2 = dataSet2.getAttribute("data-name");

          // Проверка на два нажатия на один и тот же квадрат
          if (checkData1 == checkData2) {
            dataSet2 = "";
            checkData2 = "";
            return;
          }

          dataSet2.classList.add("show");
          if (
            dataSet2.getAttribute("data-index") ==
            dataSet1.getAttribute("data-index")
          ) {
            counter = counter + 2;
            clearData();
          } else {
            flag = false;
            setTimeout(function() {
              dataSet1.classList.remove("show");
              dataSet2.classList.remove("show");
              clearData();
              flag = true;
            }, 500);
          }

          if (counter == 16) {
            finishgame();
          }
        }
      });
    }
  }
};

// let str =
//   "Добрый день. Читаю ваш сайт и нашел вот такую ссылку. Скажите, что думаете? https:learn.javascript.ru/string";

// function checkStr(string, check) {
//   return string.includes(check);
// }

// console.log(str);
// console.log(checkStr(str, "http:"));
// console.log(checkStr(str, "https:"));
// console.log(checkStr(str, ".ru"));
// console.log(checkStr(str, ".com"));
// console.log(checkStr(str, "://"));

// if (
//   checkStr(str, "http:") ||
//   checkStr(str, "https:") ||
//   checkStr(str, ".ru") ||
//   checkStr(str, ".com") ||
//   checkStr(str, "://")
// ) {
//   console.log("Да, есть");
// }

// console.log("Split method:", str.split(" "));

// let regexp = /[А-Я\s\.\?]/gi;
// let matches_array = str.match(regexp);
// // matches_array.splice(0, matches_array.length); // За счет метода splice удаляю все англиские символы

// // matches_array = matches_array.toString();

// matches_array = matches_array.join("");

// console.log(matches_array);
