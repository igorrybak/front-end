// 2) Повторите поведение кнопки по нажатию на нее (она меняет span на тег b, не изменяя при этом текст внутри тега):
const btn2 = document.getElementById("second-button");
const span2 = document.getElementById("span2");
const bold = document.createElement("b");

bold.innerText = span2.innerText;

btn2.addEventListener("click", () => {
    span2.replaceWith(bold);
});