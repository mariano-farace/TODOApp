import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
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
    console.log("sale el useEffect");
    filterHandler();
  }, [filter, todos]);

  return (
    <div className="App">
      <header>Todo List</header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
      />
      <TodoList
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        todos={todos}
      />
    </div>
  );
}
//TODO en vez de pasar tantos componenetes para abajo, como el estado, seguro puedas usar prevstate REFACTOR
export default App;
