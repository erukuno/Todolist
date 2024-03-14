// Todowrapper.jsx
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import Form from "./Form";
import { Todo } from "./Todo";

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
      {...todos
        .reverse()
        .map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
          ) : !todo.completed ? (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
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
          {...todos
            .reverse()
            .map((todo) =>
              todo.completed ? (
                <Todo
                  key={todo.id}
                  task={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  toggleComplete={toggleComplete}
                />
              ) : (
                <></>
              )
            )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TodoWrapper; // Exporting TodoWrapper as the default export
