import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handeAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (newTodo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: newTodo,
          desc: "",
          isDone: false,
          isEdit: false,
        },
      ]);
      setNewTodo("");
    }
  };

  const handleEdit = (e: React.FormEvent, name: string, desc: string) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.isEdit ? { ...todo, todo: name, desc: desc, isEdit: false } : todo
      )
    );
  };

  const handleCancel = () => {
    setTodos(
      todos.map((todo) => (todo.isEdit ? { ...todo, isEdit: false } : todo))
    );
  };

  return (
    <div className="App">
      <span className="heading">Tasker</span>
      <InputField todo={newTodo} setTodo={setNewTodo} handleAdd={handeAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {todos.map((todo) =>
        todo.isEdit ? (
          <TodoEditor
            todo={todo}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
          />
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default App;
