import * as React from "react";

function reducer(tasks, action) {
  if (action.type === "update") {
    return tasks.map((task) =>
      task.id === action.id
        ? {
            //Map over the tasks, if the task id is the same that was dispatched have a new object
            ...task,
            //Check if the status is pending and if not change it to completed
            status: task.status === "pending" ? "completed" : "pending",
          }
        : //if not just return the task
          task
    );
  } else if (action.type === "delete") {
    //Create a new array that doesn't have the task that has the same id that was dispatched
    return tasks.filter((task) => task.id !== action.id);
  } else if (action.type === "add") {
    //spread all the existing tasks into this new array
    //and add the new task into the array
    return [...tasks, action.task];
  } else {
    throw new Error("This action type isnt supported");
  }
}

export default function TaskManager() {
  const [tasks, dispatch] = React.useReducer(reducer, []);

  const handleUpdateTaskStatus = (id) => {
    dispatch({ type: "update", id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "delete", id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    dispatch({ type: "add", task: createTask(formData.get("task")) });

    e.target.reset();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input name="task" placeholder="Task title" />
        <button className="primary" type="submit">
          Add Task
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <button
                className={`status ${task.status}`}
                onClick={() => handleUpdateTaskStatus(task.id)}
              />
              {task.title}
            </div>
            <button className="link" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
