// Todowrapper.jsx
import React, { useState } from "react";
import { Todo } from "./Todo";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1 className="todo-header">
        Todo List ({todos.filter((todo) => !todo.completed).length})
      </h1>
      <Form addTodo={addTodo} />
      {/* Display todos */}
          ) : (
            <></>
          )
        )}
      {todos.filter((todo) => todo.completed).length > 0 ? (
        <>
          <h1 className="completed-list todo-header">
            Completed Todo ({todos.filter((todo) => todo.completed).length})
            List
          </h1>
      )}
    </div>
  );
};

export default TodoWrapper; // Exporting TodoWrapper as the default export
