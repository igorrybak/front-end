// 1) Даны три целых числа(запросить у пользователя с клавиатуры ). Выведите значение наименьшего из них.

var firstNumber = prompt("Введите первое число:", "");
var secondNumber = prompt("Введите второе число:", "");
var thirdNumber = prompt("Введите третье число:", "");

(firstNumber < secondNumber) && (firstNumber < thirdNumber) ?
  console.log("Наименьшее число: " + firstNumber) :
  ((secondNumber < firstNumber) && (secondNumber < thirdNumber) ?
   console.log("Наименьшее число: " + secondNumber) :
    console.log("Наименьшее число: " + thirdNumber));
