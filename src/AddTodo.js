import { useEffect, useRef, useState } from "react";
import "./TodoList.css";

const AddTodo = ({ todos, setTodos }) => {
  const [addTodo, setAddTodo] = useState({
    id: todos[todos.length - 1].id + 1,
    done: false,
    title: "",
    description: "",
    files: [],
    date: "",
  });
  const [addBut, setAddBut] = useState("disabled-add-button");
  const inputRef = useRef();

  const deleteFile = (j) => {
    console.log("Удоли,", j);
    let newTodo = { ...addTodo };
    newTodo.files = [
      ...newTodo.files.slice(0, j),
      ...newTodo.files.slice(j + 1),
    ];
    setAddTodo(newTodo);
  };

  useEffect(() => {
    console.log(addTodo);
  }, [addTodo]);

  return (
    <div className="todo-card">
      {/* <input
        onChange={() => {
          setAddTodo((prevState) => ({
            ...prevState,
            done: !prevState.done,
          }));
        }}
        className="todo-checkbox"
        type="checkbox"
        checked={addTodo.done}
      /> */}
      <input
        onChange={(e) => {
          if (e.target.value) {
            setAddBut("add-todo-button");
          } else {
            setAddBut("disabled-add-button");
          }
          setAddTodo((prevState) => ({
            ...prevState,
            title: e.target.value,
          }));
        }}
        className="input-title"
        placeholder="Добавить название задачи"
        value={addTodo.title}
      />
      <input
        type="date"
        className="add-todo-input-date"
        value={addTodo.date}
        onChange={(e) => {
          setAddTodo((prevState) => ({
            ...prevState,
            date: e.target.value,
          }));
        }}
      />
      <input
        onChange={(e) => {
          setAddTodo((prevState) => ({
            ...prevState,
            description: e.target.value,
          }));
        }}
        className="input-description"
        placeholder="Добавить описание задачи"
        value={addTodo.description}
      />
      <div className="add-todo-files">
        {addTodo.files.map((file, j) => {
          const fr = URL.createObjectURL(file);
          console.log(file);
          return (
            <div className="file-cell" key={j}>
              <button onClick={() => deleteFile(j)} className="delete-file">
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
              <img className="file-image" width={50} height={50} src={fr} />
            </div>
          );
        })}
      </div>
      <div className="add-todo-input-files">
        <input
          onChange={(e) => {
            let newTodo = { ...addTodo };
            newTodo.files = [...newTodo.files, ...e.target.files];
            setAddTodo(newTodo);
          }}
          className="input-files"
          name="file"
          type="file"
          multiple
          ref={inputRef}
        />
      </div>

      <button
        disabled={addTodo.title === ""}
        onClick={() => {
          let newTodo = [...todos];
          newTodo.push(addTodo);
          console.log(addTodo);
          inputRef.current.value = "";
          setAddTodo({
            id: newTodo[newTodo.length - 1].id + 1,
            done: false,
            title: "",
            description: "",
            date: "",
            files: [],
          });
          setTodos(newTodo);
        }}
        className={addBut}
      >
        Добавить
      </button>
    </div>
  );
};

export default AddTodo;
