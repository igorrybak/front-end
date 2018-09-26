// 1) Даны четыре действительных числа: x1, y1, x2, y2. Напишите функцию distance(x1, y1, x2, y2),
// вычисляющую расстояние между точкой (x1,y1) и (x2,y2). Считайте четыре действительных числа и
// выведите результат работы этой функции.

alert("Введите последовательно четыре числа:");

const num1 = prompt();
const num2 = prompt();
const num3 = prompt();
const num4 = prompt();

function calcDistance(n1, n2, n3, n4) {
  let distance = Math.sqrt(Math.pow((n1 - n3), 2) + Math.pow((n2 - n4), 2));
  return (Math.round(distance * 100) / 100);
};

alert("Расстояние между точками: " + calcDistance(num1, num2, num3, num4));