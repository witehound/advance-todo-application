import { todoServices } from "../../service";
import TodoContainer from "./TodoContainer";

const WithDpendencyOfTodoServices = (Component: any) => {
  const todoService = new todoServices();
  return () => <Component todoService={todoService} />;
};

const TodoContainerWithDpendencyOfTodoServices =
  WithDpendencyOfTodoServices(TodoContainer);

export default TodoContainerWithDpendencyOfTodoServices;
