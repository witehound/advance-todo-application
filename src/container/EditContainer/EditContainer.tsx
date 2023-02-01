import {
  Textfield,
  TextAreaFeild,
  Checkbox,
  Button,
  CanvasFeild,
} from "../../components";
import styles from "./EditContainer.module.css";

const EditContainer = () => {
  return (
    <div className={styles.edit}>
      <h2>Edit Todo</h2>
      <div>
        <Textfield name="task" value="" onInput={() => {}} label="Task" />
        <Checkbox name="" label="Is Done?" />
        <TextAreaFeild value="" />
        <CanvasFeild />
      </div>
      <div className={styles.buttons}>
        <Button style="primary">Save</Button>
        <Button style="secondary">Cancel</Button>
      </div>
    </div>
  );
};

export default EditContainer;
