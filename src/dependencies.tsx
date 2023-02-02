import { todoServices } from "./service";
import { ElementType, ComponentProps } from "react";

const todoService = new todoServices();

export const dependencyContainer = {
  DItodoService: todoService,
} as any;

export const dependencies = {
  todoService: "DItodoService",
} as any;

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
