import styles from "./AboutContainer.module.css";

const AboutContainer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>About</h1>
        <p className={styles.text}>App to manage todo list</p>
      </div>
      <div>
        <h1 className={styles.h1}>Features</h1>
        <ul className={styles.text}>
          <li>Add todo</li>
          <li>Remove todo</li>
          <li>Mark todo as done</li>
          <li>Mark todo as active</li>
          <li>To do stats</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutContainer;
