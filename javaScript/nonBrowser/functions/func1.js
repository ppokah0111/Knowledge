function perform(operation, a, b) {
  if (operation == "+") {
    result = a + b;
  } else if (operation == "-") {
    result = a - b;
  } else if (operation == "*") {
    result = a * b;
  } else if (operation == "/") {
    if (b != 0) result = a / b;
    else result = "Invalid entry";
  } else if (operation == "%") {
    result = a % b;
  } else {
    result = "Invalid entry";
  }
  console.log("A ", operation, " B = ", result);
}

a = 30;
b = 45;
operation = "+";
perform(operation, a, b);

perform("-", a, b);
perform("*", a, b);
perform("/", a, b);
perform("%", a, b);
perform(" ", a, b);
