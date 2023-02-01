import { todoServices } from "../../service";
import TodoContainer from "./TodoContainer";

const todoService = new todoServices();

const container = {
  DItodoService: todoService,
} as any;

const WithDpendency = (Component: any, dependencies: any) => {
  const props = {} as any;

  Object.entries(dependencies).forEach(([el]) => {
    const depkey = dependencies[el];
    const dep = container[depkey];
    props[el] = dep;
  });

  return () => <Component {...props} />;
};

export default WithDpendency(TodoContainer, {
  todoService: "DItodoService",
});
