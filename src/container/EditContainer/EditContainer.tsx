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
  const onClickSaveButton = async () => {
    await todoService.updateTodo(selectedTask, todo);
    onSaveClick();
  };

  const onClickCancelButton = () => {
    onCloseClick();
  };

  const getTask = async () => {
    const data = await todoService.getSingleTodo(selectedTask);
    setTodo(data);
  };

  const onFormChnaged = (key: string, value: string | boolean) => {
    setTodo((prev) => ({ ...prev, [key]: value }));
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
          onInput={(value) => onFormChnaged("task", value)}
          label="Task"
        />
        <Checkbox
          name="isDone"
          label="Is Done?"
          value={todo.isDone}
          onInput={(value) => onFormChnaged("isDone", value)}
        />
        <TextAreaFeild
          value={todo.description}
          name="description"
          onInput={(value) => onFormChnaged("description", value)}
        />
        <CanvasFeild
          value={todo.handNotes}
          label="Hand Notes"
          name="handNotes"
          onInput={(value) => onFormChnaged("handNotes", value)}
        />
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
