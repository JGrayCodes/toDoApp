// Create a Task class with object constructor
class Task {
  constructor(name, date) {
    this._taskName = name;
    this._taskDate = date;
    this._completed = false;
  }

  // Getter for task name
  get getName() {
    return this._taskName;
  }

  // Setter for task name
  set setName(name) {
    this._taskName = name;
  }

  // Getter for task date
  get getDate() {
    return this._taskDate;
  }

  // Setter for task date
  set setDate(date) {
    this._taskDate = date;
  }

  // Getter for completed toggle
  get getCompleted() {
    return this._completed;
  }

  // Setter for completed toggle
  set setCompleted(completed) {
    this._completed = completed;
  }
}

// Create an array to store all the objects
const taskArray = [];

// Create a function to instantiate a new object and add the object to an array
function createTask() {
  // Initialize and assign variables
  let name = document.getElementById("taskName").value;
  let date = document.getElementById("taskDate").value;

  // Log the variables - check they're pulling through!
  console.log(name);
  console.log(date);

  // Instantiate a new Task by using the class Task constructor
  const task = new Task(name, date);

  // Push this new Task into an array
  taskArray.push(task);

  // Log the array - check the data is in the array!
  console.log(taskArray);

  // Call the function to display the tasks
  displayTasks(task);
}

// Create a function to display all of the task objects in the task array
function displayTasks() {
  document.getElementById("tasksDisplay").innerHTML = "";
  for (let i = 0; i < taskArray.length; i++) {
    console.log(i);

    // create a div container for all of the entries and give it a class name
    const taskEntries = document.createElement("div");
    taskEntries.classList.add("task-entries");

    // create a span for the data of one task entry & give it a class name
    const taskData = document.createElement("span");
    taskData.classList.add("task-data");

    // Create the buttons.
    const button1 = document.createElement("button");
    button1.innerHTML = "Completed";
    const button2 = document.createElement("button");
    button2.innerHTML = "Edit";
    const button3 = document.createElement("button");
    button3.innerHTML = "Delete";

    // Create the nodes.

    // need this & next line to add a class to the created task name text node
    const taskNode1 = document.createElement("span");
    taskNode1.classList.add("task-name");
    // then get and append the task name from the array
    taskNode1.appendChild(document.createTextNode(taskArray[i].getName));

    // need this & next line to add a class to the created task date text node
    const taskNode2 = document.createElement("span");
    taskNode2.classList.add("task-date");
    // then get and append the task date from the array
    taskNode2.appendChild(document.createTextNode(taskArray[i].getDate));

    // Append buttons and nodes to span
    taskData.appendChild(button1);
    taskData.appendChild(taskNode1);
    taskData.appendChild(taskNode2);
    taskData.appendChild(button2);
    taskData.appendChild(button3);

    console.log(taskData);

    taskEntries.appendChild(taskData);

    document.getElementById("tasksDisplay").appendChild(taskEntries);

    button1.addEventListener("click", function () {
      completedTask(i);
    });
    button2.addEventListener("click", function () {
      editTask(i);
    });
    button3.addEventListener("click", function () {
      deleteTask(i);
    });
  }
}

function completedTask(index) {
  const task = taskArray[index];

  console.log(task.getCompleted);

  const taskData = document.querySelector(".task-entries");
  const taskNameNode = taskData.querySelector(".task-name");
  const taskDateNode = taskData.querySelector(".task-date");

  task.setCompleted = !task.getCompleted;

  if (task.getCompleted == true) {
    // Add a line-through style to the task name and date if the task is complete
    taskNameNode.style.textDecoration = "line-through";
    taskDateNode.style.textDecoration = "line-through";
  } else {
    // Remove a line-through style to the task name and date if the task marked as incomplete
    taskNameNode.style.textDecoration = "none";
    taskDateNode.style.textDecoration = "none";
  }
}
