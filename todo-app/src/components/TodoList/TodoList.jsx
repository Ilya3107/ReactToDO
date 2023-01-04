import React from "react";
import "./todoList.scss";

export default function TodoList({ list, remove }) {
  return (
    <div>
      {list.length > 0 ? (
        <ul className="todo__list">
          {list.map((entry, index) => (
            <div className="todo">
              <li className="todo__item" key={index}>
                {entry}
              </li>
              <button
                className="delete-button"
                onClick={() => {
                  remove(entry);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Not tasks</p>
        </div>
      )}
    </div>
  );
}
