// 3) Дан HTML код (см. под задачей). Поменяйте содержимое абзацев на их порядковый номер в коде по клику на кнопку.

const btn3 = document.getElementById("third-button");
const allP = document.body.getElementsByTagName("p");

btn3.addEventListener("click", () => {
    for (let i = 0; i < allP.length; i++) {
        allP[i].innerText = i + 1;  
    }
});