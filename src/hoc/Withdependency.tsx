import { ElementType } from "react";
import { TodoContainer } from "../container";
import { dependencyContainer, dependencies } from "../dependencies";

const WithDpendency = (Component: ElementType, dependencies: any) => {
  const props = {} as any;

  Object.entries(dependencies).forEach(([el]) => {
    const depkey = dependencies[el];
    const dep = dependencyContainer[depkey];
    props[el] = dep;
  });

  return () => <Component {...props} />;
};

export default WithDpendency(TodoContainer, {
  todoService: dependencies.todoService,
});
