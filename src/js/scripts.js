// Create a Task class with object constructor
class Task {
  constructor(name, date) {
    this._taskName = name;
    this._taskDate = date;
  }

  // Getter for task name
  get taskName() {
    return this._taskName;
  }

  // Setter for task name
  set taskName(name) {
    this._taskName = name;
  }

  // Getter for task date
  get taskDate() {
    return this._taskDate;
  }

  // Setter for task date
  set taskDate(date) {
    this._taskDate = date;
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

  
}
