import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ todos, setTodos, setFilter }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
    setInputText("");
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
