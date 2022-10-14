import { FC } from "react";
import ErrorBoundary from "../../utils/ErrorBoundary";
import TodoContainer from "./TodoContainer";

const TodoApp: FC = () => {
  return (
    <ErrorBoundary>
      <TodoContainer />
    </ErrorBoundary>
  );
};

export default TodoApp;
