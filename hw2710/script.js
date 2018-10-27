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
const img = document.createElement("img");

p.textContent = someText;
img.src = "https://c.tcdn.co/53c/d19/53cd1968-1bb2-11e8-9132-0007cb0b8645/channel256.png";
img.classList.add("img");

redDiv.appendChild(p);
redDiv.appendChild(img);

// 5) Удалить предпоследний элемент в body
const allBodyNodes = document.body.getElementsByTagName('*');
document.body.removeChild(allBodyNodes[allBodyNodes.length - 3]);

// 6) Получить кол-во узлов в body
const nodesCount = document.body.childNodes.length;

// 7) Удалить все узлы типа text
const allNodes = document.body.childNodes;

for (const key in allNodes) {
    if (allNodes[key].nodeName == "#text") {
        allNodes[key].remove();
    };
};

// 8) Создать узел типа комментарий и вставить его в начало body 
const commentNode = document.createComment("My comment");
document.body.insertBefore(commentNode, allBodyNodes[0]);

// 9) Достать текст из комментария
const foundedComment = document.body.childNodes[0].nodeValue;

// 10) Удалить все узлы в body
allNodes.forEach(el => {
    document.body.removeChild(el);
});
