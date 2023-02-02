import { useCallback, useContext, useEffect, useState } from "react";
import {
  Textfield,
  TextAreaFeild,
  Checkbox,
  Button,
  CanvasFeild,
} from "../../components";
import styles from "./EditContainer.module.css";
import { todoServices } from "../../service";
import { TodoContext } from "../../App";

type EditContainerProps = {
  todoService: todoServices;
};

type EditTodoState = {
  description: string;
  handNotes: string;
  task: string;
  isDone: boolean;
};

const EditContainer = ({ todoService }: EditContainerProps) => {
  const { todoState, setTodoState } = useContext(TodoContext);
  const [todo, setTodo] = useState<EditTodoState>({
    description: "",
    handNotes: "",
    task: "",
    isDone: false,
  });

  const onClickCancelButton = () => {
    setTodoState({ editTodo: -1 });
  };

  const onClickSaveButton = async () => {
    await todoService.updateTodo(todoState.editTodo, todo);
    onClickCancelButton();
  };

  const getTask = async () => {
    const data = await todoService.getSingleTodo(todoState.editTodo);
    setTodo(data);
  };

  const onFormChnaged = (key: string, value: string | boolean) => {
    setTodo((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    getTask();
  }, [todoState.editTodo]);

  return (
    <div>
      <h2>Edit Todo</h2>
      <div>
        <Textfield
          name="task"
          value={todo.task}
          onInput={useCallback((value) => onFormChnaged("task", value), [])}
          label="Task"
        />
        <Checkbox
          name="isDone"
          label="Is Done?"
          value={todo.isDone}
          onInput={useCallback(
            (value: boolean) => onFormChnaged("isDone", value),
            []
          )}
        />
        <TextAreaFeild
          value={todo.description}
          name="description"
          onInput={useCallback(
            (value) => onFormChnaged("description", value),
            []
          )}
        />
        <CanvasFeild
          value={todo.handNotes}
          label="Hand Notes"
          name="handNotes"
          onInput={useCallback(
            (value) => onFormChnaged("handNotes", value),
            []
          )}
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
