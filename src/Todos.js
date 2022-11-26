import logo from "./logo.svg";
import "./TodoList.css";
import AddTodo from "./AddTodo";
import { useEffect, useRef } from "react";

const Todos = ({ todos, setTodos }) => {
  const inputRef = useRef();
  const deleteFile = (j, i) => {
    console.log("Удоли,", j);
    let newTodo = [...todos];
    newTodo[i].files = [
      ...newTodo[i].files.slice(0, j),
      ...newTodo[i].files.slice(j + 1),
    ];
    setTodos(newTodo);
  };
  useEffect(() => {
    //inputRef.current.value = "";
  }, [todos]);

  return (
    <div className="todo-list">
      {todos.map((todo, i) => {
        if (todo.done) {
          return (
            <div className="todo-card added-card" key={todo.id}>
              <input
                className="todo-checkbox"
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                  const todo = todos[i];
                  todo.isEdit = true;
                  todo.done = !todo.done;
                  setTodos((prevState) => [
                    ...prevState.slice(0, i),
                    todo,
                    ...prevState.slice(i + 1),
                  ]);
                }}
              />

              <div className="done-title">{todo.title}</div>
              <input
                className="input-description"
                onChange={(e) => {
                  const todo = todos[i];
                  todo.isEdit = true;
                  todo.description = e.target.value;
                  setTodos((prevState) => [
                    ...prevState.slice(0, i),
                    todo,
                    ...prevState.slice(i + 1),
                  ]);
                }}
                value={todo.description}
              />
              <div className="todo-files">
                {todo.files.map((file, j) => {
                  const fr = URL.createObjectURL(file);
                  return (
                    <div className="file-cell" key={j}>
                      <button
                        onClick={() => deleteFile(j, i)}
                        className="delete-file"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 1L1 13M1 1L13 13"
                            stroke="#121921"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <img
                        className="file-image"
                        width={50}
                        height={50}
                        key={i}
                        src={fr}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="input-files">
                <input
                  onChange={(e) => {
                    const todo = todos[i];
                    todo.isEdit = true;
                    todo.files = [...todo.files, ...e.target.files];
                    inputRef.current.value = "";
                    setTodos((prevState) => [
                      ...prevState.slice(0, i),
                      todo,
                      ...prevState.slice(i + 1),
                    ]);
                  }}
                  className="input-files"
                  name="file"
                  type="file"
                  multiple
                  ref={inputRef}
                />
              </div>
              <button
                onClick={() => {
                  setTodos((prevState) => [
                    ...prevState.slice(0, i),
                    ...prevState.slice(i + 1),
                  ]);
                }}
                className="delete-todo"
              >
                Удалить{" "}
              </button>
              <input
                type="date"
                id="start"
                name="trip-start"
                value={todo.date}
                className="date"
                onChange={(e) => {
                  const todo = todos[i];
                  todo.isEdit = true;
                  todo.title = e.target.value;
                  setTodos((prevState) => [
                    ...prevState.slice(0, i),
                    todo,
                    ...prevState.slice(i + 1),
                  ]);
                }}
              />
            </div>
          );
        } else {
          return (
            <div className="todo-card added-card" key={todo.id}>
              <input
                className="todo-checkbox"
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                  const todo = todos[i];
                  todo.isEdit = true;
                  todo.done = !todo.done;
                  setTodos((prevState) => [
                    ...prevState.slice(0, i),
                    todo,
                    ...prevState.slice(i + 1),
                  ]);
                }}
              />
              <input
                className="input-title"
                value={todo.title}
                onChange={(e) => {
                  const todo = todos[i];
                  todo.isEdit = true;
                  todo.title = e.target.value;
                  setTodos((prevState) => [
                    ...prevState.slice(0, i),
                    todo,
                    ...prevState.slice(i + 1),
                  ]);
                }}
              />
              <input
                className="input-description"
                onChange={(e) => {
                  const todo = todos[i];
                  todo.isEdit = true;
                  todo.description = e.target.value;
                  setTodos((prevState) => [
                    ...prevState.slice(0, i),
                    todo,
                    ...prevState.slice(i + 1),
                  ]);
                }}
                value={todo.description}
              />
              <div className="todo-files">
                {todo.files.map((file, j) => {
                  const fr = URL.createObjectURL(file);
                  return (
                    <div className="file-cell" key={j}>
                      <button
                        onClick={() => deleteFile(j, i)}
                        className="delete-file"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 1L1 13M1 1L13 13"
                            stroke="#121921"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <img
                        className="file-image"
                        width={50}
                        height={50}
                        key={i}
                        src={fr}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="input-files">
                <input
                  onChange={(e) => {
                    const todo = todos[i];
                    todo.isEdit = true;
                    todo.files = [...todo.files, ...e.target.files];
                    inputRef.current.value = "";
                    setTodos((prevState) => [
                      ...prevState.slice(0, i),
                      todo,
                      ...prevState.slice(i + 1),
                    ]);
                  }}
                  className="input-files"
                  name="file"
                  type="file"
                  multiple
                  ref={inputRef}
                />
              </div>
              <button
                onClick={() => {
                  setTodos((prevState) => [
                    ...prevState.slice(0, i),
                    ...prevState.slice(i + 1),
                  ]);
                }}
                className="delete-todo"
              >
                Удалить{" "}
              </button>
              <input
                type="date"
                id="start"
                name="trip-start"
                value={todo.date}
                className="date"
                onChange={(e) => {
                  const todo = todos[i];
                  todo.isEdit = true;
                  todo.title = e.target.value;
                  setTodos((prevState) => [
                    ...prevState.slice(0, i),
                    todo,
                    ...prevState.slice(i + 1),
                  ]);
                }}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Todos;
