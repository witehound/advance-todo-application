import { TodoContainer } from "../container";
import { WithDpendency, dependencies } from "../dependencies";

export default WithDpendency(TodoContainer, {
  todoService: dependencies.todoService,
});
