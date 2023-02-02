import EditContainer from "./EditContainer";
import { dependencies, WithDpendency } from "../../dependencies";

export default WithDpendency(EditContainer, {
  todoService: dependencies.todoService,
});
