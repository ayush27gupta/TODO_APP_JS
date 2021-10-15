let list_items = [];

function toggle_list_fn() {
  var var1 = document.querySelector(".container");
  var1.classList.toggle("active");
  var addBox = document.querySelector("#popup_list");
  addBox.classList.toggle("active");
}

let flag;

function toggle_item_fn(abc) {
  if (abc !== false) {
    let element = Number(abc.parentNode.parentNode.id);
    let var1 = document.querySelector(".container");
    var1.classList.toggle("active");
    let addBox = document.querySelector("#popup_item");
    addBox.classList.toggle("active");
    flag = element;
  } else {
    let var1 = document.querySelector(".container");
    var1.classList.toggle("active");
    let addBox = document.querySelector("#popup_item");
    addBox.classList.toggle("active");
  }
}

function add_list_fn() {
  const inputField = document.querySelector("#inputField_lists").value;
  if (inputField !== "") {
    let set = {
      title: inputField,
      id: Date.now(),
    };
    list_items.push(set);
    console.log(list_items);
    const null_items = document.querySelector("#null_items");
    null_items.style.display = "none";
  }

  toggle_list_fn();
  createCard();
}

function createCard() {
  let createDiv = document.createElement("div");
  let container = document.querySelector(".list_container");
  createDiv.setAttribute("class", "element");

  for (let i = 0; i < list_items.length; i++) {
    let getItem = list_items[i];
    createDiv.setAttribute("id", getItem.id);
    createDiv.innerHTML = `<h1 id="para"> ${getItem.title} </h1>
                         <hr>
                         <div class="para_inside"></div><br>
                         <div id="addbtn">
                         <button onclick="removeCard(this)"><i class="fas fa-trash-alt" id="card_remove"></i></button>
                         <button onclick="toggle_item_fn(this)"><i class="fas fa-plus-circle" id="ad"></i></button>
                         </div>`;
    container.appendChild(createDiv);
  }
}

function add_item_fn() {
  let item_text = document.getElementById("inputField_item").value;

  let list_container = document.getElementById("vala").children;
  console.log(list_container);
  for (let i = 0; i < list_items.length; i++) {
    let see = list_container[i];

    let change = see.children[2];

    let find = list_items[i];

    //console.log(flag);
    if (find.id === flag) {
      if (item_text !== "") {
        var mark = document.createElement("div");
        mark.setAttribute("class", "mark");
        mark.setAttribute("id", flag + 1);
        mark.innerHTML = `<h3 id="card_inside">${item_text}</h3>
                          <h3 id="markDone_btn" onclick="markDone(this)">Done</h3>`;
        change.appendChild(mark);
      }
    }
  }

  toggle_item_fn(false);
}

function markDone(card) {
  let mark = card.parentNode;
  let see = card.parentNode.children[0];
  let choose = card.parentNode.children[1];
  const n = Number(mark.id) - 1;
  for (let i = 0; i < list_items.length; i++) {
    let changes_2 = list_items[i];
    if (changes_2.id === n) {
      choose.style.display = "none";
      see.style.color = "red";
      see.style.textDecoration = "line-through";
      see.style.textDecorationColor = "red";
    }
  }
}

function removeCard(removes) {
  let del = removes.parentNode.parentNode;
  const id_del = Number(removes.parentNode.parentNode.id);
  for (let i = 0; i < list_items.length; i++) {
    let changes = list_items[i];
    if (changes.id === id_del) {
      list_items.splice(i, 1);
      break;
    }
  }
  del.remove(del);
  if (items.length == 0) {
    const null_items = document.querySelector("#null_items");
    null_items.style.display = "block";
  }
}
