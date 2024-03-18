const list = document.querySelector(".usernames");

const lastItem = document.createElement("li");
lastItem.textContent = "Last element";
list.append(lastItem);

const firstItem = document.createElement("li");
firstItem.textContent = "First element";
list.prepend(firstItem);

const title = document.createElement("h2");
title.textContent = "Title";
list.before(title);

const text = document.createElement("p");
text.textContent = "bnhgyt njhuy nhjko mjkl";
list.after(text);

const lastItem2 = document.createElement("li");
lastItem2.textContent = "Last element2";
list.append(lastItem2);

const firstItem1 = document.createElement("li");
firstItem1.textContent = "First element1";
list.prepend(firstItem1);

const titleSmall = document.createElement("h3");
titleSmall.textContent = "Title small";
list.before(titleSmall);

const textBefore = document.createElement("p");
textBefore.textContent = "nmjupp ertf  cdf";
list.before(textBefore);
