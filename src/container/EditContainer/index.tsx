import { ElementType, ComponentProps } from "react";
import EditContainer from "./EditContainer";
import { dependencyContainer, dependencies } from "../../dependencies";

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

export default WithDpendency(EditContainer, {
  todoService: dependencies.todoService,
});
