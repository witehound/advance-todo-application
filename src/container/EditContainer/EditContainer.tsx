import { Textfield, TextAreaFeild, Checkbox, Button } from "../../components";
import styles from "./EditContainer.module.css";

const EditContainer = () => {
  return (
    <div className={styles.edit}>
      <h2>Edit Todo</h2>
      <div>
        <Textfield name="name" value="" onInput={() => {}} />
        <Checkbox name="" />
        <TextAreaFeild value="" />
        <canvas />
      </div>
      <div>
        <Button style="primary">Save</Button>
        <Button style="secondary">Cancel</Button>
      </div>
    </div>
  );
};

export default EditContainer;
