// 5*) Напишите функцию capitalize(), которая принимает слово из маленьких латинских букв
// и возвращает его же, меняя первую букву на большую.
// Например, print(capitalize('hello')) должно печатать слово Hello.

const word = prompt("Введите слово:");

function capitalize(word) {
    return word[0].toUpperCase() + word.substr(1);
};

console.log(capitalize(word));
