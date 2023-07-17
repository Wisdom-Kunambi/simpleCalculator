(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Please Enter";
    } else {
      try {
        let expression = screen.value;
        let answer = evaluateExpression(expression);
        screen.value = answer;
      } catch (error) {
        screen.value = "Error";
      }
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });

  function evaluateExpression(expression) {
    let sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, "");
    return Function(`'use strict'; return (${sanitizedExpression})`)();
  }
})();
