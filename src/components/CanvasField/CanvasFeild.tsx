import styles from "./CanvasFeild.module.css";

type CanvasFeildProps = {
  name?: string;
  label?: string;
  value?: string;
};

const CanvasFeild = ({ label, name, value }: CanvasFeildProps) => {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <canvas className={styles.canvas} />
    </div>
  );
};

export default CanvasFeild;
