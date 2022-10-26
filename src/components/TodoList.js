import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todoItem) => {
          return (
            <Todo key={todoItem.id} text={todoItem.text} setTodos={setTodos} />
          );
        })}
        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;
