import { todoServices } from "../../service";
import "./StatsContainer.module.css";

type StatsContainerProps = {
  todoService: todoServices;
};

const StatsContainer = ({}: StatsContainerProps) => {
  return (
    <div>
      <h2>Stats</h2>
      <div>
        <div>To do</div>
        <ul>
          <li>1</li>
        </ul>
      </div>
      <div>
        <div>Not do</div>
        <ul>
          <li>2</li>
        </ul>
      </div>
    </div>
  );
};

export default StatsContainer;
