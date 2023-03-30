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

const taskArray = [];

