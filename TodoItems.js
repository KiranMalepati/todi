/* eslint-disable react/prop-types */
import { Fragment, useContext } from "react";
import AppContext from "../../utils/AppContext";

const TodoItems = ({
  todoItems,
  handleChange,
  handleUpdateClickOpen,
  handleClickOpen,
}) => {
  const { userName } = useContext(AppContext);

  return (
    <div className="todo-container">
      <hr />
      {/* <AppContext.Consumer>
        {(userName) => {
          return (
            <>
              <h2>User Name is: {userName}</h2>
              {todoItems.map((todo) => {
                return (
                  <Fragment key={todo.id}>
                    <div className="todo-item" key={todo.id}>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(e) => handleChange(e, todo)}
                      />
                      <span
                        className={
                          todo.completed ? "item item-completed" : "item"
                        }
                      >
                        {todo.title}
                      </span>
                      <div className="todo-btn-group">
                        <button
                          className="button secondary"
                          onClick={() => handleUpdateClickOpen(todo)}
                        >
                          Update
                        </button>
                        &nbsp; &nbsp;
                        <button onClick={() => handleClickOpen(todo)}>
                          Delete
                        </button>
                      </div>
                    </div>
                    <hr />
                  </Fragment>
                );
              })}
            </>
          );
        }}
      </AppContext.Consumer> */}
      <h2>User Name is: {userName}</h2>
      {todoItems.map((todo) => {
        return (
          <Fragment key={todo.id}>
            <div className="todo-item" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => handleChange(e, todo)}
              />
              <span className={todo.completed ? "item item-completed" : "item"}>
                {todo.title}
              </span>
              <div className="todo-btn-group">
                <button
                  className="button secondary"
                  onClick={() => handleUpdateClickOpen(todo)}
                >
                  Update
                </button>
                &nbsp; &nbsp;
                <button onClick={() => handleClickOpen(todo)}>Delete</button>
              </div>
            </div>
            <hr />
          </Fragment>
        );
      })}
    </div>
  );
};

export default TodoItems;
