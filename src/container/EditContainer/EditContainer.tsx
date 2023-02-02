import { useEffect, useState } from "react";
import {
  Textfield,
  TextAreaFeild,
  Checkbox,
  Button,
  CanvasFeild,
} from "../../components";
import styles from "./EditContainer.module.css";
import { todoServices } from "../../service";

type EditContainerProps = {
  selectedTask: number;
  onSaveClick: () => void;
  onCloseClick: () => void;
  todoService: todoServices;
};

type EditTodoState = {
  description: string;
  handNotes: string;
  task: string;
  isDone: boolean;
};

const EditContainer = ({
  selectedTask,
  onSaveClick,
  onCloseClick,
  todoService,
}: EditContainerProps) => {
  const [todo, setTodo] = useState<EditTodoState>({
    description: "",
    handNotes: "",
    task: "",
    isDone: false,
  });
  const onClickSaveButton = () => {
    onSaveClick();
  };

  const onClickCancelButton = () => {
    onCloseClick();
  };

  const getTask = async () => {
    const data = await todoService.getSingleTodo(selectedTask);
    setTodo(data);
  };

  useEffect(() => {
    getTask();
  }, [selectedTask]);
  return (
    <div className={styles.edit}>
      <h2>Edit Todo</h2>
      <div>
        <Textfield
          name="task"
          value={todo.task}
          onInput={() => {}}
          label="Task"
        />
        <Checkbox name="" label="Is Done?" value={todo.isDone} />
        <TextAreaFeild value={todo.description} />
        <CanvasFeild value={todo.handNotes} />
      </div>
      <div className={styles.buttons}>
        <Button style="primary" handleOnClick={onClickSaveButton}>
          Save
        </Button>
        <Button style="secondary" handleOnClick={onClickCancelButton}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditContainer;
