// В прикрипленном файле найти и выполнить

// 1) Найти все div и вывести их количество
const allDivs = document.getElementsByTagName("div");
console.log(allDivs.length);

// 2) Все дивы без текста заполнить строкой текста
const someText = "Lorem ispum";
for (const key in allDivs) {
    if (!allDivs[key].innerHTML) {
        allDivs[key].innerHTML = someText;
    }
}

// 3) Найти div с классом red и убедиться что это действительно div
const redDiv = document.getElementsByClassName("red")[0] instanceof HTMLDivElement ?
    document.getElementsByClassName("red")[0] : undefined;

// 4) Внутри div создать p с текстом и img, в картинку добавить класс и ссылку на картинку
const p = document.createElement("p");
p.textContent = someText;

const img = document.createElement("img");
img.add
p.appendChild(img);

redDiv.appendChild(p);

// 5) Удалить предпоследний элемент в body
// 6) Получить кол-во узлов в body
// 7) Удалить все узлы типа text
// 8) Создать узел типа комментарий и вставить его в начало body 
// 9) Достать текст из комментария
// 10) Удалить все узлы в body