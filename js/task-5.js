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
