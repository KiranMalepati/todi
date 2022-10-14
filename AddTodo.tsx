import { FC } from "react";
import Switch from "@mui/material/Switch";

type AddTodoTypes = {
  handleNewTodoChange: (e: any) => void,
  newTodoRef: any,
  newTodo: string,
  checked: boolean,
  setchecked: (e: boolean) => void,
  handleAddTodo: () => void,
  newTodoError: string,
};

const AddTodo: FC<AddTodoTypes> = ({
  handleNewTodoChange,
  newTodoRef,
  newTodo,
  checked,
  setchecked,
  handleAddTodo,
  newTodoError,
}) => {
  return (
    <div className="add-todo-container">
      <input
        type="text"
        placeholder="Add todo here..."
        onChange={handleNewTodoChange}
        ref={newTodoRef}
        value={newTodo}
      />
      &nbsp;
      <label style={{ color: checked ? "black" : "gray" }} htmlFor="swicth">
        Completed:
      </label>
      <Switch
        checked={checked}
        onChange={() => setchecked(!checked)}
        id="swicth"
      />
      &nbsp;
      <button onClick={handleAddTodo}>Add todo</button>
      {newTodoError && <p className="error">*{newTodoError}</p>}
    </div>
  );
};

export default AddTodo;
