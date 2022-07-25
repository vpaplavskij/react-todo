import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todo: Todo;
  handleEdit: (e: React.FormEvent, name: string, desc: string) => void;
  handleCancel: () => void;
}

const TodoEditor: React.FC<Props> = ({ todo, handleEdit, handleCancel }) => {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  useEffect(() => {
    setName(todo.todo);
    setDesc(todo.desc);
  }, [todo]);

  return (
    <form className="todos__editor" onSubmit={(e) => handleEdit(e, name, desc)}>
      <h2 className="title__editor">Todos editor</h2>
      <h3>Name</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <h3>Description</h3>
      <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
      <div className="buttons_editor">
        <AiFillSave
          className="icon"
          onClick={(e) => handleEdit(e, name, desc)}
        />
        <MdCancel className="icon" onClick={() => handleCancel()} />
      </div>
    </form>
  );
};

export default TodoEditor;
