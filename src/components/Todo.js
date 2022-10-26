import React from "react";

const Todo = ({ text, setTodos }) => {
  const deleteHandler = () => {};

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
//TODO si el array esta vacio va a hacer un render de un componente como este vacio hay que mejorarlo

export default Todo;
