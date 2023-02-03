import { WithDpendency , dependencies} from "../../dependencies";
import StatsContainer from "./StatsContainer";

export default WithDpendency(StatsContainer, {
    todoService : dependencies.todoService
})