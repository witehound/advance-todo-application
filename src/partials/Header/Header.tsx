import styles from "./Header.module.css";
import Headerlink from "./HeaderLink/Headerlink";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Just doIt App</h1>
      <nav className={styles.nav}>
        <Headerlink text="Home" url="/" />
        <Headerlink text="Stats" url="/stat" />
        <Headerlink text="About" url="/about" />
      </nav>
    </header>
  );
};

export default Header;
