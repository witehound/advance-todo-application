import { todoServices } from "./service";
const todoService = new todoServices();


export const dependencyContainer = {
  DItodoService: todoService,
} as any;

export const dependencies = {
  todoService : "DItodoService"
} as any