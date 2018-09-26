// 2) Дано 10 целых чисел. Вычислите их сумму. Напишите программу, использующую наименьшее число переменных.

const numbers = [4, 6, 22, 6, 23, 762, 8, 4, 7, 0];

function calcSum(nums) {
  return nums.reduce((sum, curr) => {
    return sum + curr;
  }, 0);
};

const sum = calcSum(numbers);

console.log("Даны числа: " + numbers);
console.log("Сумма чисел: " + sum);

