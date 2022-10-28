import React from "react";

const Todo = ({ todoItem, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todoItem.id));
  };

  const markAsCompleteHandler = () => {
    console.log("TODOS error:", todos);
    const updatedTodoArray = todos.map((element) => {
      if (element.id === todoItem.id) {
        return { ...todoItem, completed: !todoItem.completed };
      } else {
        return element;
      }
    });
    setTodos(updatedTodoArray);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todoItem.completed ? "completed" : ""}`}>
        {todoItem.text}
      </li>
      <button onClick={markAsCompleteHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
//TODO si el array esta vacio va a hacer un render de un componente como este vacio hay que mejorarlo

export default Todo;
