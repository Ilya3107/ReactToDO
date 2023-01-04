import React from "react";
import InputAdd from "./components/Input/InputAdd";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/header/Header";
import DateBlock from "./components/Date/DateBlock";

function App() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  let data = new Date();
  console.log(data);

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <DateBlock data={data} />
        <InputAdd todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={todos} remove={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
