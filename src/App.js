import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //TODO en vez de pasar tantos componenetes para abajo, como el estado, seguro puedas usar prevstate REFACTOR

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todoItem) => todoItem.completed));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todoItem) => !todoItem.completed));
        break;

      default:
        setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, todos]);

  return (
    <div className="App">
      <header>Todo List</header>
      <Form todos={todos} setTodos={setTodos} setFilter={setFilter} />
      <TodoList
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
