// 3) По данному натуральному n ≤ 9 выведите лесенку из n ступенек,
// i-я ступенька состоит из чисел от 1 до i без пробелов.


const naturNum = prompt("Введите натуральное число от 1 до 9:");

function drawStairs(num) {
    let str = "";
    for (let i = 1; i <= num; i++) {
        str += i.toString();
        console.log(str);
    };
};

console.log(drawStairs(naturNum));