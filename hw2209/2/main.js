// 2) Даны три целых числа(запросить у пользователя с клавиатуры ). Определите, сколько среди них совпадающих.
// Программа должна вывести одно из чисел: 3 (если все совпадают), 2 (если два совпадает) или 0 (если все числа различны).

var firstNumber = prompt("Введите первое число:", "");
var secondNumber = prompt("Введите второе число:", "");
var thirdNumber = prompt("Введите третье число:", "");

var allEqual = 3;
var twoEqual = 2;
var noEqual = 0;

if (firstNumber == secondNumber && firstNumber == thirdNumber) {
  console.log(allEqual);
} else if (firstNumber == secondNumber && firstNumber != thirdNumber) {
  console.log(twoEqual);
} else if (firstNumber == thirdNumber && thirdNumber != secondNumber) {
  console.log(twoEqual);
} else if (thirdNumber == secondNumber && thirdNumber != firstNumber) {
  console.log(twoEqual);
} else {
  console.log(noEqual);
};
