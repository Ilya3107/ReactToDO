import React from "react";
import "./inputAdd.scss";

function InputAdd({ addTodo, todo, setTodo }) {
  return (
    <div className="input-wrapper">
      <input
        className="input-add"
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="button-add" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default InputAdd;
