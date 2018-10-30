// Повторите поведение кнопки по нажатию на нее (она меняет текст в span):
const btn1 = document.getElementById("first-button");
const span1 = document.getElementById("span1");

btn1.addEventListener("click", () => {
    span1.innerText = "!!!";
});