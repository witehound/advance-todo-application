import styles from "./HeaderLink.module.css";
type HeaderlinkProps = {
  url?: string;
  text: string;
};

const Headerlink = ({ text, url }: HeaderlinkProps) => {
  return (
    <a href={url} className={styles.a}>
      {text}
    </a>
  );
};

export default Headerlink;
