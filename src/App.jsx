import { useState } from "react";
import "./App.css";
import TaskCard from "./components/task.card";

const tasks = [
  {
    id: 0,
    title: "Design a React app",
    status: "in progress",
    priority: "high",
  },
  { id: 1, title: "Feed  my cat", status: "completed", priority: "medium" },
  { id: 2, title: "clean my room", status: "open", priority: "low" },
];

function App() {
  return (
    <>
      <header>
        <h1>Task Monitor</h1>
      </header>
      <main>
        <div>
          <p>This is a simple app for keeping track of various tasks.</p>
        </div>
        <div>
          {tasks.map((task) => (
            <ul key={task.id}>
              <li>
                <TaskCard
                  title={task.title}
                  status={task.status}
                  priority={task.priority}
                />
              </li>
            </ul>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
