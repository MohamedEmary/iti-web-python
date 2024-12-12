var taskList = document.getElementById("task-list");
var submit = document.getElementById("add-task");
var taskInput = document.getElementById("task-content");
var taskList = [];
var complete = document.querySelectorAll("#complete");
var deleted = document.querySelectorAll("#delete");
var i = 0;

function handleMarkComplete(complete) {
  complete.forEach((element) => {
    element.addEventListener("click", (e) => {
      var element = e.target;
      var parent = element.parentElement.parentElement;
      var parentId = parent.id;
      parent.classList.add("done");
      taskList[parseInt(parentId)].status = "done";
      console.log(taskList);
    });
  });
}

function handleDelete(deleted) {
  deleted.forEach((element) => {
    element.addEventListener("click", (e) => {
      var element = e.target;
      var parent = element.parentElement.parentElement;
      parent.remove();
      var parentId = parent.id;
      taskList.splice(parseInt(parentId), 1);
      console.log(taskList);
    });
  });
}

function updateTaskList() {
  var tasksDiv = document.getElementById("task-list");
  tasksDiv.innerHTML = ``;

  for (let i = 0; i < taskList.length; i++) {
    tasksDiv.innerHTML += `
      <div class="task ${taskList[i].status == "done" ? "done" : ""}" id="${i}">
        <p>${taskList[i].name}</p>
        <div class="task-status">
          <span id="complete">✅</span>
          <span id="delete">❌</span>
        </div>
      </div>
    `;
  }
  complete = document.querySelectorAll("#complete");
  deleted = document.querySelectorAll("#delete");

  handleMarkComplete(complete);
  handleDelete(deleted);

  taskInput.value = "";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  var task = taskInput.value;
  taskList.push({
    id: i,
    name: task,
    status: "not-done",
  });

  i++;

  updateTaskList();
});
