let currentExpression = "";

function appendToDisplay(value) {
  currentExpression += value;
  document.getElementById("display").value = currentExpression;
}

function appendOperator(operator) {
  if (currentExpression === "") return;
  const lastChar = currentExpression[currentExpression.length - 1];
  if (!isNaN(lastChar) || lastChar === ".") {
    currentExpression += operator;
    document.getElementById("display").value = currentExpression;
  }
}

function clearDisplay() {
  currentExpression = "";
  document.getElementById("display").value = currentExpression;
}

function deleteLastChar() {
  currentExpression = currentExpression.slice(0, -1);
  document.getElementById("display").value = currentExpression;
}

function calculateResult() {
  if (currentExpression === "") return;
  const result = eval(currentExpression);
  document.getElementById("display").value = result;
  currentExpression = result.toString();
}
