import { ComponentProps, ElementType } from "react";
import { TodoContainer } from "../container";
import { dependencyContainer, dependencies } from "../dependencies";

export const WithDpendency = (Component: ElementType, dependencies: any) => {
  const resolveDependencies = {} as any;

  Object.entries(dependencies).forEach(([el]) => {
    const depkey = dependencies[el];
    const dep = dependencyContainer[depkey];
    resolveDependencies[el] = dep;
  });

  return (props: ComponentProps<typeof Component>) => (
    <Component {...props} {...resolveDependencies} />
  );
};

export default WithDpendency(TodoContainer, {
  todoService: dependencies.todoService,
});
