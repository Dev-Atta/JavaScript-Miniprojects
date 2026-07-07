let inputel = document.getElementById("todo-input");
let listel = document.getElementById("todo-list");

function addTodo() {
  let task = inputel.value;

  if (task === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerText = task;

  let delbtn = document.createElement("button");
  delbtn.innerText = "X";
  delbtn.className = "del-btn";
  delbtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delbtn);
  listel.appendChild(li);

  inputel.value = "";
}
