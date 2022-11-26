import logo from "./logo.svg";
import "./TodoList.css";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      done: false,
      files: [],
      title: "Выбросить мусор",
      description: "Выбросить мусор",
      date: "2000-12-15",
    },
    {
      id: 2,
      done: false,
      files: [],
      title: "Выбросить мусор",
      description: "Выбросить мусор",
      date: "2000-12-18",
    },
    {
      id: 3,
      done: false,
      files: [],
      title: "Выбросить мусор",
      description: "Выбросить мусор",
      date: "2000-12-12",
    },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="todo">
      <h2>Добавить задачу</h2>
      <AddTodo todos={todos} setTodos={setTodos} />
      <h2>Список задач</h2>
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
