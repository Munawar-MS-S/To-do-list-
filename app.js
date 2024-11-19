```
let tasks = [];

function addTask() {
  const task = prompt("Enter task:");
  tasks.push(task);
  console.log(`Task added: ${task}`);
  displayTasks();
}

function deleteTask() {
  const taskNumber = prompt("Enter task number to delete:");
  tasks.splice(taskNumber - 1, 1);
  console.log(`Task deleted successfully!`);
  displayTasks();
}

function displayTasks() {
  console.log("To-Do List:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

while (true) {
  console.log("\n1. Add Task");
  console.log("2. Delete Task");
  console.log("3. Display Tasks");
  console.log("4. Quit");
  const choice = prompt("Choose an option:");
  
  switch (choice) {
    case "1":
      addTask();
      break;
    case "2":
      deleteTask();
      break;
    case "3":
      displayTasks();
      break;
    case "4":
      console.log("Goodbye!");
      exit();
    default:
      console.log("Invalid option. Please choose again.");
  }
}
```
