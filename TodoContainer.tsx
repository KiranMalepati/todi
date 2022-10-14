import React, { useState, useRef, FC, useContext, useEffect } from "react";
import todoItemsData from "./todoItems.json";
import DeleteTodo from "./DeleteTodo";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import UpdateTodo from "./UpdateTodo";
import AppContext from "../../utils/AppContext";

type TodoTypes = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoContainer: FC = () => {
  const [todoItems, settodoItems] = useState<TodoTypes[]>(todoItemsData);
  const [checked, setchecked] = useState<boolean>(false);
  const [newTodo, setnewTodo] = useState<string>("");
  const [newTodoError, setnewTodoError] = useState<string>("");
  const [updateTodo, setupdateTodo] = useState<TodoTypes>({
    id: 1,
    title: "",
    completed: false,
  });
  const [updateOpen, setupdateOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [deletedTodo, setdeletedTodo] = useState<TodoTypes>({
    id: 1,
    title: "",
    completed: false,
  });
  const newTodoRef = useRef();
  const { settodos }: any = useContext(AppContext);

  useEffect(() => {
    settodos(todoItems);
  }, [settodos, todoItems]);

  // Update handlers...
  const handleUpdateClickOpen = (todo: TodoTypes) => {
    setupdateOpen(true);
    setupdateTodo(todo);
  };

  const updateHandleClose = () => {
    setupdateOpen(false);
  };

  const handleUpdateChange = (e: any) => {
    setupdateTodo({ ...updateTodo, title: e.target.value });
  };

  const handleUpdate = () => {
    const items = todoItems.map((todo) => {
      if (todo.id === updateTodo.id) {
        todo.title = updateTodo.title;
      }
      return todo;
    });
    settodoItems(items);
    setupdateOpen(false);
  };

  // Read on change handler
  const handleChange = (e: any, todo: TodoTypes) => {
    const filItems = todoItems.map((item) => {
      if (item.id === todo.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    settodoItems(filItems);
  };

  // Add todo handlers...
  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewTodo(e.target.value);
    if (e.target.value) {
      setnewTodoError("");
    } else {
      setnewTodoError("Please enter the new todo value");
    }
  };

  const handleAddTodo = () => {
    const refNode: any = newTodoRef;
    const isExisting = todoItems.some(
      (todo) => todo.title.trim().toLowerCase() === newTodo.trim().toLowerCase()
    );
    if (!isExisting) {
      if (newTodo) {
        const newTodoItem = {
          id: Math.floor(Math.random() * 999999 + 100000),
          title: newTodo,
          completed: checked,
        };

        settodoItems([...todoItems, newTodoItem]);
        setnewTodoError("");
        setnewTodo("");
        setchecked(false);
      } else {
        refNode.current.focus();
        setnewTodoError("Please enter the new todo value");
      }
    } else {
      refNode.current.focus();
      setnewTodoError("Todo already exists");
    }
  };

  // Delete todo handlers..
  const handleClickOpen = (todo: TodoTypes) => {
    setOpen(true);
    setdeletedTodo(todo);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const items = todoItems.filter((todo) => todo.id !== deletedTodo.id);
    settodoItems(items);
    setOpen(false);
  };

  return (
    <div className="todo-app container">
      <h2>Todo Container</h2>
      <AddTodo
        handleNewTodoChange={handleNewTodoChange}
        newTodoRef={newTodoRef}
        newTodo={newTodo}
        checked={checked}
        setchecked={setchecked}
        handleAddTodo={handleAddTodo}
        newTodoError={newTodoError}
      />
      <TodoItems
        todoItems={todoItems}
        handleChange={handleChange}
        handleClickOpen={handleClickOpen}
        handleUpdateClickOpen={handleUpdateClickOpen}
      />
      {updateOpen && (
        <UpdateTodo
          open={updateOpen}
          handleClose={updateHandleClose}
          handleUpdate={handleUpdate}
          handleUpdateChange={handleUpdateChange}
          updateTodo={updateTodo}
        />
      )}
      {open && (
        <DeleteTodo
          deletedTodo={deletedTodo}
          open={open}
          handleClose={handleClose}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default TodoContainer;
