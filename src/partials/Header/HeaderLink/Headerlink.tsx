import styles from "./HeaderLink.module.css";
import { Link } from "react-router-dom";
type HeaderlinkProps = {
  url?: any;
  text: string;
};

const Headerlink = ({ text, url }: HeaderlinkProps) => {
  return (
    <Link to={url} className={styles.a}>
      {text}
    </Link>
  );
};

export default Headerlink;
