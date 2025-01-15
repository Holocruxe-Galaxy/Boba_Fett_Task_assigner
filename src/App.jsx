import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/ia.png";
import "./App.css";
import TaskAssigner from "./components/task_assigner/task_assigner";

function App() {
  return (
    <>
      <div>
        <TaskAssigner />
      </div>
    </>
  );
}

export default App;
