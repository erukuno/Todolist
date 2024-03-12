import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue(""); // Reset input field after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder="What is the task today?"
        />
        <button type="submit" className="todo-btn">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
};

export default Form; // Exporting the Form component
