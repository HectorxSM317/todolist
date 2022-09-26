let input = document.querySelector("input");
let addBtn = document.querySelector(".btn-add");
let ul = document.querySelector("ul");
let empty = document.querySelector(".empty");
let deleteAll = document.querySelector(".deleteAll");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let text = input.value;

  if (text !== "") {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addBtnDelete());
    ul.appendChild(li);

    empty.style.display = "none";
    input.value = "";
  }
});

function addBtnDelete() {
  let btnDelete = document.createElement("button");

  btnDelete.textContent = "X";
  btnDelete.className = "btn-delete";

  btnDelete.addEventListener("click", (e) => {
    let item = e.target.parentElement;
    ul.removeChild(item);

    let items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return btnDelete;
}

deleteAll.addEventListener("click", (e) => {
  e.preventDefault();
  let items = document.querySelectorAll("li");

  items.forEach((element) => {
    ul.removeChild(element);
  });

  empty.style.display = "block";
});
