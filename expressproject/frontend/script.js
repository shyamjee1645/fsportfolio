function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
      var taskItem = document.createElement("li");
      var taskLabel = document.createElement("span");
      taskLabel.textContent = taskText;
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteButton.onclick = function() {
        taskItem.remove();
      };
      taskItem.appendChild(taskLabel);
      taskItem.appendChild(deleteButton);
      document.getElementById("task-list").appendChild(taskItem);
      taskInput.value = "";
    }
  }