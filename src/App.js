import logo from "./logo.svg";
import "./App.css";

import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>
      </header>
      <TodoList />
    </div>
  );
};

export default App;
