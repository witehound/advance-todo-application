import EditContainer from "./EditContainer";
import { dependencies, WithDpendency } from "../../dependencies";
import WithSideBar from "../../hoc/WithSideBar/WithSideBar";

export default WithSideBar(
  WithDpendency(EditContainer, {
    todoService: dependencies.todoService,
  })
);
