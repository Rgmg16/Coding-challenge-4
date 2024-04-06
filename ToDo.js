const taskInput = document.getElementById("task-input");

const addTaskBtn = document.getElementById("add-task-btn");

const taskList = document.getElementById("task-list");

const timeInput = document.getElementById("time-input");

addTaskBtn.addEventListener("click", function() {

  const taskText = taskInput.value;

  if (taskText.trim() !== "") {

    const taskItem = document.createElement("li");

    taskItem.innerText = taskText;

    taskItem.addEventListener("click", function() {

      taskItem.remove();

    });

    taskList.appendChild(taskItem);

    taskInput.value = "";

  }

  const timeText = timeInput.value;

  if (timeText.trim() !== "") {

    const timeItem = document.createElement("li");

    timeItem.style.display= "";

    timeItem.innerText = timeText;

    timeItem.addEventListener("click", function() {

      timeItem.remove();

    });

    taskList.appendChild(timeItem);

    timeInput.value = "";

  }

});


  
  
  taskList.addEventListener("click", function(event) {
  
    if (event.target.tagName.toLowerCase() === "li") {
  
      event.target.remove();
  
    }
  
  });
  