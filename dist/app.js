import { Cart } from "./cart.js";
const articlesList = document.querySelector("#articles");
const content = document.querySelector(".content");
const main = document.querySelector("main");
const container = document.querySelector(".container");
const obj = [
    {
        typeArticle: "Perfume",
        name: "Gabrielle<br>Essence Eau De<br>Parfum",
        desc: " A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
        price: "$100",
        altPrice: "$200",
    },
    {
        typeArticle: "Perfume",
        name: "Sandra<br>Essence Eau De<br>Parfum",
        desc: " A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
        price: "$150",
        altPrice: "$250",
    },
    {
        typeArticle: "Perfume",
        name: "Olivia<br>Essence Eau De<br>Parfum",
        desc: " A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
        price: "$200",
        altPrice: "$300",
    },
];
let chosenObj = [
    {
        typeArticle: "Perfume",
        name: "Gabrielle<br>Essence Eau De<br>Parfum",
        desc: " A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
        price: "$100",
        altPrice: "$200",
    },
];
function showArticlesList() {
    container.style.display = "none";
    const table = document.createElement("table");
    table.classList.add("table");
    const tr0 = document.createElement("tr");
    tr0.innerHTML = `
  <th>Type;</th>
  <th>Name</th>
  <th>Description</th>
  <th>Price</th>
  <th>Previous price</th>
  <th>Action</th>`;
    table.appendChild(tr0);
    obj.forEach((article, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
  <td>${article.typeArticle}</td>
  <td>${article.name}</td>
  <td>${article.desc}</td>
  <td>${article.price}</td>
  <td>${article.altPrice}</td>
  <td id="add"><button data-index="${index}" class="add-btn" >Add</button></td>`;
        table.appendChild(tr);
    });
    main.appendChild(table);
    eventAdd();
}
function eventAdd() {
    const addBtn = document.querySelectorAll(".add-btn");
    const table = document.querySelector("table");
    addBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const target = e.target;
            chosenObj.splice(0, 1, obj[target.dataset.index]);
            table.remove();
            container.style.display = "grid";
            showArticle(chosenObj);
        });
    });
}
function showArticle(articles) {
    content.innerHTML = "";
    articles.forEach((article) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");
        articleElement.innerHTML = `
    <div class="type-article">${article.typeArticle}</div>
    <div class="name-article">${article.name}</div>
    <div class="description">
      ${article.desc}
    </div>
    <div class="price">  
      <span class="actual-price" >${article.price}</span>
      <span class="previous-price">${article.altPrice}</span>
    </div>
    <div class="btn"><button>🛒 Add to Cart</button></div>`;
        content.appendChild(articleElement);
    });
}
function eventCart() {
    const cartBtn = document.querySelector("#cart");
    cartBtn.addEventListener("click", (e) => {
        const nameArticle = document.querySelector(".name-article");
        const price = document.querySelector(".actual-price");
        const cart = new Cart(nameArticle.innerHTML, price.innerHTML);
        const cartElement = cart.render();
        document.body.appendChild(cartElement);
        eventClose();
    });
}
function eventClose() {
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", (e) => {
        const cart = document.querySelector(".cart");
        cart.remove();
    });
}
showArticle(chosenObj);
eventCart();
articlesList.addEventListener("click", (e) => {
    showArticlesList();
});
