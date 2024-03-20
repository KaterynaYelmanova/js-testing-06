//повністю видаляємо та створюємо нових нащадків

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

const user = document.querySelector(".user");
const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");
console.log(markup);

user.innerHTML = markup;

//додаємо параграф та посилання

const htmlString22 = `<p class="article-text22">hgyuinh 222  okiygff</p>
<a class="link-a22" href="#">Read max...</a>`;
user.innerHTML += htmlString22;

//додаємо параграф та посилання

const article = document.querySelector(".article");
const htmlString = `<p class="article-text">hgyuinh   okiygff</p>
<a class="link-a" href="#">Read more...</a>`;

article.innerHTML += htmlString;

//сворюємо ще 3 елем в список та створимо назву

const newListRed = document.querySelector(".list-end");

const newText46 = ["Text 444", "Text 555", "Text 66-6"];

const newMarkup = newText46
  .map((newText) => `<li class="list-item-new">${newText}</li>`)
  .join("");

newListRed.insertAdjacentHTML("beforeend", newMarkup);
newListRed.insertAdjacentHTML("beforebegin", "<h2>Test Red 1-6</h2");

//додаємо кнопку
newListRed.insertAdjacentHTML("afterbegin", "<button>Button</button>");

//отримаємо посилання на кнопку і додамо на неї слухача події

const button = document.querySelector("button");
//перший спосіб
button.addEventListener("click", () => {
  console.log("The button");
});

const buttonSingle = document.querySelector(".btn");
buttonSingle.addEventListener("click", () => {
  console.log("The button single");
});

//другий спосіб
const handleClick = () => {
  console.log("The button was pressed and now the next image will appear");
};

button.addEventListener("click", handleClick);
buttonSingle.addEventListener("click", handleClick);

//події клавіатури

document.addEventListener("keydown", (event) => {
  console.log("Keydown: ", event);
});
document.addEventListener("keyup", (event) => {
  console.log("Keyup: ", event);
});
document.addEventListener("keydown", (event) => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});

//подія input тільки на текстових полях та textarea
//можна ще додати trim()
//output.textContent = event.currentTarget.value.trim();

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
